<?php

namespace App\Service;

use App\Entity\User;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserService
{
    private  $entityManager;

    private $security;

    private $hasher;

    public function __construct(EntityManagerInterface $entityManager, Security $security, UserPasswordHasherInterface $hasher)
    {
        $this->entityManager = $entityManager;
        $this->security = $security;
        $this->hasher = $hasher;
    }

    public function createUser(array $data) : void
    {
        $user = new User();
        $user->setEmail($data["email"]);
        $hashedPassword = $this->hasher->hashPassword(
            $user,
            $data['password']
        );
        $user->setPassword($hashedPassword);
        $user->setName($data["name"]);
        $user->setRoles(["ROLE_CREATOR"]);

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }

    public function getActiveUser(): UserInterface
    {
        return $this->security->getUser();
    }

    public function setProfilePhoto($photo) : void
    {
        $user = $this->getActiveUser();
        $user->setProfilePhoto($photo);
        $this->entityManager->flush();
    }

}
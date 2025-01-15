<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SettingsController extends AbstractController
{

    #[Route('/settings', name: 'app_settings', methods: 'GET')]
    public function getSettingsPage(): Response
    {
        return $this->render('settings/index.html.twig');
    }

    #[Route('/photo', name: 'app_user_setUserPhoto', methods: 'POST')]
    public function setUserPhoto(Request $request, UserService $userService): Response
    {
        $photo = $request->files->get('photo');
        if ($photo) {
            $photoPath = uniqid() . '.' . $photo->guessExtension();
            $photo->move(
                $this->getParameter('profile_photos_directory'),
                $photoPath
            );
            $userService->setProfilePhoto($photoPath);
        }
        return $this->redirectToRoute('app_settings');

    }
    #[Route('/social', name: 'app_user_setSocialMedia', methods: 'POST')]
    public function setSocialMedia(Request $request, UserService $userService): Response
    {
        return $this->json($request->request->all());
    }
}
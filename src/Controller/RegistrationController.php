<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{

    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    #[Route('/registration', name: 'app_registration', methods: 'GET')]
    public function index(): Response
    {
        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }

    #[Route('/registration', name: 'app_registration_new_user', methods: 'POST')]
    public function registration(Request $request): Response
    {
        $data = (array)$request->getPayload();
        $this->userService->createUser($data[array_key_first($data)]);
        return $this->redirect('/home');
    }
}

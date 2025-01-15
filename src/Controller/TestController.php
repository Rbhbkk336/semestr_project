<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index(): Response
    {
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }
    #[Route('/home', name: 'app_home',methods: 'GET')]
    public function getHomePage(): Response
    {
        return $this->render('home/index.html.twig');
    }
    #[Route('/search', name: 'app_search', methods: 'GET')]
    public function getSearchPage(): Response
    {
        return $this->render('search/index.html.twig');
    }
}

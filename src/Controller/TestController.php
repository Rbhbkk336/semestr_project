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
    #[Route('/my-page', name: 'app_my_page', methods: 'GET')]
    public function getMyPage(): Response
    {
        return $this->render('my-page/index.html.twig');
    }
    #[Route('/publication', name: 'app_publication', methods: 'GET')]
    public function getPublicationPage(): Response
    {
        return $this->render('publication/index.html.twig');
    }
}

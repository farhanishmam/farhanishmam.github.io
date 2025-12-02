---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transparent Button</title>
    <style>
        .transparent-button {
            display: inline-block;
            background-color: transparent;
            border: 1px solid #3498db;
            color: #3498db;
            padding: 6px 14px;
            margin-top: 6px; /* add breathing room above buttons */
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            border-radius: 999px;
            text-decoration: none;
            line-height: 1.4;
            transition:
                background-color 0.2s ease,
                color 0.2s ease,
                box-shadow 0.2s ease,
                transform 0.2s ease,
                border-color 0.2s ease;
        }

        .transparent-button:hover {
            background-color: #3498db;
            color: #ffffff;
            border-color: #3498db;
            box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4);
            transform: translateY(-1px);
        }

        .justified-text {
            text-align: justify;
        }

        .justified-text-para {
            text-align: justify;
            font-size: 16px;
        }

        .news-container {
            max-height: 180px;
            overflow-y: auto;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 12px 24px 12px 36px; /* extra left padding for bullets */
            margin-bottom: 40px;
            scrollbar-width: thin;
            scrollbar-color: #888 #f0f0f0;
        }

        @media screen and (min-width: 1024px) {
            .news-container {
                max-width: 900px;
                margin-left: 0;
            }
        }

        .news-container::-webkit-scrollbar {
            width: 8px;
        }

        .news-container::-webkit-scrollbar-track {
            background: #f0f0f0;
            border-radius: 4px;
        }

        .news-container::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }

        .news-container::-webkit-scrollbar-thumb:hover {
            background: #666;
        }

        .news-item {
            padding: 6px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .news-item:last-child {
            border-bottom: none;
        }
    </style>

</head>
</html>
<p class="justified-text">
Hi, I'm Farhan, a graduate PhD student at KSoC, UofU. I obtained my Bachelor's degree from IUT-CSE. Currently, I am working on web agents with <a href = "http://kennethmarino.com/">Prof. Kenneth Marino</a>.
<h2>News and Updates</h2>
<ul class="news-container">
  <li class="news-item"><strong>Nov 25:</strong> 3 of my works got accepted at WACV'26!</li>
  <li class="news-item"><strong>Aug 25:</strong> Started my PhD at the University of Utah!</li>
  <li class="news-item"><strong>June 25:</strong> <a href="https://arxiv.org/abs/2410.14991">ChitroJera</a>, got accepted at ECML-PKDD'25!</li>
  <li class="news-item"><strong>March 25:</strong> Attended WACV'25.</li>
  <li class="news-item"><strong>Jan 25:</strong> <a href="https://arxiv.org/abs/2410.13281">BanTH</a>, got accepted at Findings of NAACL'25!</li>
  <li class="news-item"><strong>Oct 24:</strong> <a href="https://arxiv.org/abs/2407.03386">Visual Robustness Benchmark for VQA</a> is accepted at WACV'25. I'm grateful to my wonderful teammates and advisors at IUT-CSE.</li>
  <li class="news-item"><strong>Oct 24:</strong> <a href="https://github.com/farhanishmam/BanglaTLit">FourierKAN outperforms MLP on Text Classification Head Fine-tuning</a> got accepted at <a href="https://sites.google.com/view/neurips2024-ftw">FITML</a> at NeurIPS'24. Shoutout to my teammate <a href="https://www.imranabdullah.com/about">Abdullah Al Imran</a>.</li>
  <li class="news-item"><strong>Sep 24:</strong> Our work on Bangla back-transliteration, <a href="https://github.com/farhanishmam/BanglaTLit">BanglaTLit</a> got accepted at Findings of EMNLP, 2024. Great work from team Penta!</li>
  <li class="news-item"><strong>Jul 24:</strong> New preprint on my undergrad thesis, <a href="https://arxiv.org/abs/2407.03386">Visual Robustness Benchmark for VQA</a>, is available on arXiv.</li>
  <li class="news-item"><strong>May 24:</strong> Finalists at Robi Datathon 3.0, Bangladesh's largest data analysis event with 3,500+ participants. Another competition with team Penta!</li>
  <li class="news-item"><strong>May 24:</strong> Participated in the <a href="http://nlp.uned.es/exist2024/">EXIST-2024</a> shared task with my amazing team from <a href="https://www.pentabd.com/">Penta Global</a>.</li>
  <li class="news-item"><strong>Jan 24:</strong> Our <a href="https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484">VQA Survey</a> got accepted at Information Fusion.</li>
</ul>
<h2>Research Highlights</h2>
<h3>R-MMA: Enhancing Vision-Language Models with Recurrent Adapters for Few-Shot and Cross-Domain Generalization</h3>

Md Fahim*, <b>Farhan Ishmam*</b>, Mir Sazzat Hossain, M Ashraful Amin, Amin Ahsan Ali, AKM Mahbubur Rahman<br>

<p>
  <a class="transparent-button" href="https://drive.google.com/file/d/1JzHbUd6pui7MxpM32KL3tGhGXQPz5qkf/view" target="_blank" rel="noopener">Paper</a>
</p>

<div style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
    <img src="images/overviewVRE.png" style="border: 2px solid black;">
</div>

<ul style="font-size: 16px;">
  <li>Vision-Language Models (VLMs) like CLIP excel at zero-shot classification but struggle with few-shot learning and cross-domain generalization.</li>
  <li>We propose R-MMA (Recurrent Multi-Modal Adapters), a novel adapter architecture that enhances VLMs for few-shot and cross-domain tasks.</li>
  <li>R-MMA uses recurrent connections to iteratively refine features, improving adaptation with limited data.</li>
  <li>Our method achieves state-of-the-art results on multiple benchmarks, demonstrating superior few-shot learning and cross-domain generalization capabilities.</li>
</ul>

<!-- # Add two spaces after writing the title to go new line and two spaces before the new line. -->

<!-- ## Visual Question Answering (VQA)

- **Visual Robustness Benchmark for Visual Question Answering (VQA)**
   _In-review, Preprint Available_
   **Md Farhan Ishmam**\*, Ishmam Tashdeed\*, Talukder Asir Saadat\*, Md Hamjajul Ashmafee, Abu Raihan Mostofa Kamal, Md Azam Hossain
   [Preprint](https://arxiv.org/abs/2407.03386) | [Code](https://github.com/ishmamt/VQA-Visual-Robustness-Benchmark)
  <button class="transparent-button" onclick="window.location.href='https://your-link-here.com'">
  ArVix
  </button>

<button class="transparent-button" onclick="window.location.href='https://your-link-here.com'">
    Code
</button>

- **ChitroJera: A Regionally Relevant Visual Question Answering Dataset for Bangla**
  _In-review_
  Md Fahim\*, Deeparghya Dutta Barua\*, Md Sakib Ul Rahman Sourove\*, **Md Farhan Ishmam**, Fariha Tanjim Shifat, Fabiha Haider, Farhad Alam Bhuiyan
  [Code](https://github.com/farhanishmam/ChitroJera)

- **From Image to Language: A Critical Analysis of Visual Question Answering (VQA) Approaches, Challenges, and Opportunities**
  [_Information Fusion Journal_](https://www.sciencedirect.com/journal/information-fusion) | _2024_
  **Md Farhan Ishmam**, Md Sakib Hossain Shovon, Muhammad Firoz Mridha, Nilanjan Dey
  [Paper](https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484) | [Preprint](https://arxiv.org/abs/2311.00308)

## Transliteration and Code-Mixing

- **BnSentMix: A Diverse Bengali-English Code-Mixed Dataset for Sentiment Analysis**
  _In-review, Preprint Available_
  Sadia Alam, **Md Farhan Ishmam**, Navid Hasin Alvee, Md Shahnewaz Siddique, Md Azam Hossain, Abu Raihan Mostofa Kamal
  [Preprint](https://arxiv.org/abs/2408.08964) | [Code](https://github.com/Nishita2000/BnSentMix/)

- **BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla**
  _In-review_
  Md Fahim\*, Fariha Tanjim Shifat\*, **Md Farhan Ishmam**\*, Deeparghya Dutta Barua, Fabiha Haider, Md Sakib Ul Rahman Sourove, Farhad Alam Bhuiyan
  [Code](https://github.com/farhanishmam/BanglaTLit)

## Harmful Content

- **Penta NLP at EXIST 2024 Task 1–3: Sexism Identification, Source Intention, Sexism Categorization In Tweets**
  [_EXIST at Conference and Labs of the Evaluation Forum (CLEF)_](http://nlp.uned.es/exist2024/) | _2024_
  Fariha Tanjim Shifat, Fabiha Haider, Md Sakib Ul Rahman Sourove, Deeparghya Dutta Barua, **Md Farhan Ishmam**, Md Fahim, Farhad Alam Bhuiyan
  [Paper](https://ceur-ws.org/Vol-3740/paper-114.pdf) | [Code](https://github.com/farhanishmam/Penta-Exist-2024)

- **Penta ML at EXIST 2024: Tagging Sexism in Online Multimodal Content With Attention-enhanced Modal Context**
  [_EXIST at Conference and Labs of the Evaluation Forum (CLEF)_](http://nlp.uned.es/exist2024/) | _2024_
  Deeparghya Dutta Barua, Md Sakib Ul Rahman Sourove, Fabiha Haider, Fariha Tanjim Shifat, **Md Farhan Ishmam**, Md Fahim, Farhad Alam Bhuiyan
  [Paper](https://ceur-ws.org/Vol-3740/paper-90.pdf) | [Code](https://github.com/farhanishmam/Penta-Exist-2024)

## Text Classification Techniques

- **Leveraging FourierKAN Classification Head for Pre-Trained Transformer-based Text Classification**
  _Preprint Available_
  Abdullah Al Imran\*, **Md Farhan Ishmam**\*
  [Preprint](https://arxiv.org/abs/2408.08803) | [Code](https://github.com/abdalimran/FR-KAN-Text-Classification) -->

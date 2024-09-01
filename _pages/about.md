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
            background-color: transparent;
            border: 2px solid #3498db;
            color: #3498db;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .transparent-button:hover {
            background-color: #3498db;
            color: white;
        }

        .justified-text {
            text-align: justify;
        }

        .justified-text-para {
            text-align: justify;
            font-size: 16px; 
        }

    </style>
    

</head>
</html>
<p class="justified-text">
I am a researcher at <a href="https://ndagcse.iutoic-dhaka.edu/">NDAG Lab</a> and <a href="https://www.pentabd.com/">Penta Global Limited</a>. I completed my Bachelor's in Computer Science and Engineering (<a href="https://cse.iutoic-dhaka.edu/">CSE</a>) from Islamic University of Technology (<a href="https://www.iutoic-dhaka.edu/">IUT</a>) and have started working as a lecturer in the same department.

Currently, I am collaborating with <a href = "https://about.uq.edu.au/experts/32270">Dr Mohammad Ali Moni</a> on LLM applications in the biomedical domain and <a href = "https://sites.google.com/view/mirrayatimtiazhossain/home">Mir Rayat Imtiaz Hossain</a> on assistive technologies for color blindness. My research interests include:
<ul>
  <li><strong>Visual Question Answering (VQA) and Multimodal Learning</strong></li>
  
  Interplay between Visual and Textual modalities, how information is conveyed between them, practical usability of multimodal systems and potential applications.
  <br>
  <li><strong>Low Resource Natural Language Processing (NLP)</strong></li>
  
  Intricacies of less-explored languages, mixing of words and scripts between languages, resource transfer between languages to enhance NLP.
  <br>
  <li><strong>Evaluation and Frugal Learning of Large Language Models (LLMs)</strong></li>
  
  Knowledge profiling of LLMs, how LLMs can achieve comparable performance by using less resources.  
</ul>
<h1>Recent News</h1>

- **Aug 24:** New pre-prints on Fourier-KAN Text Classification and Code-Mixed Bengali Sentiment Analysis are available on arXiv.
- **Jul 24:** Pre-print on Visual Robustness Benchmark for VQA is available on arXiv.
- **May 24:** Achieved Top 7 in Robi Datathon 3.0.
- **May 24:** Exist Workshop Papers accepted.
- **Jan 24:** VQA Survey is accepted in Information Fusion.

<h1>Research Highlights</h1>
<h2>Visual Robustness Benchmark for Visual Question Answering (VQA)</h2>

<b>Md Farhan Ishmam</b>\*, Ishmam Tashdeed\*, Talukder Asir Saadat\*, Md Hamjajul Ashmafee, Abu Raihan Mostofa Kamal, Md Azam Hossain <br>
<body>
<button class="transparent-button" onclick="window.location.href='https://arxiv.org/abs/2407.03386'">
    ArVix
</button>

<button class="transparent-button" onclick="window.location.href='https://github.com/ishmamt/VQA-Visual-Robustness-Benchmark'">
    Code
</button>
</body>

<div style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
    <img src="images/overviewVRE.png" style="border: 2px solid black;">
</div>

<ul style="font-size: 16px;">
    <li>Large-scale benchmark comprising of 213,000 augmented images to challenge the robustness of VQA models against realistic visual corruptions.</li>
    <li>Novel robustness evaluation metrics, which can be aggregated into a unified metric adaptable for multiple use cases.</li>
    <li>Experiments reveal the interplay between factors, such as model size, performance, and robustness, when subjected to real-world corruption effects.</li>
</ul>

<h2>From Image to Language: A Critical Analysis of Visual Question Answering (VQA) Approaches, Challenges, and Opportunities</h2>

<b>Md Farhan Ishmam</b>, Md Sakib Hossain Shovon, Muhammad Firoz Mridha, Nilanjan Dey <br>
<body>
<button class="transparent-button" onclick="window.location.href='https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484'">
    Information Fusion 2024
</button>
</body>

<div style="display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; width: 100%;">
    <img src="images/vqaOverview.PNG" style="border: 2px solid black; max-width: 50%; height: 85%;  margin-right: 10px;">
    <img src="images/vqaApp.PNG" style="border: 2px solid black; max-width: 50%; height: auto;">
</div>

<ul style="font-size: 16px;">
    <li> Comprehensive survey on VQA datasets, methods, metrics, challenges, and research opportunities. </li>
    <li> New taxonomy that systemetically categories VQA literature and multimodal learning tasks. </li>
    <li> Novel real-world applications of VQA in domains e.g. assistive technology, education, and healthcare. </li>
</ul>

<h2>BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla</h2>

Md Fahim\*, Fariha Tanjim Shifat\*, <b>Md Farhan Ishmam</b>\*, Deeparghya Dutta Barua, Fabiha Haider, Md Sakib Ul Rahman Sourove, Farhad Alam Bhuiyan
<br>
<body>
<button class="transparent-button" onclick="window.location.href='https://github.com/farhanishmam/BanglaTLit'">
    Code
</button> </body>

<div style="display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; width: 100%;">
    <img src="images/tLitOverview.PNG" style="border: 2px solid black; max-width: 38%; height: 76%; margin-right: 10px;">
    <img src="images/tLit.png" style="border: 2px solid black; max-width: 60%; height: auto;">
</div>

<ul style="font-size: 16px;">
    <li> First large-scale automated Bangla transliteration, BanglaTLit, with over 42.7k samples.</li>
    <li> A romanized Bangla pre-training corpus, BanglaTLit-PT, with over 245.7k samples. </li>
    <li> Novel T5-based dual encoder architecture achieving SOTA on BanglaTLit.</li>
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

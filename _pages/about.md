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
<h3>Visual Robustness Benchmark for Visual Question Answering (VQA)</h3>

<b>Md Farhan Ishmam*</b>, Ishmam Tashdeed*, Talukder Asir Saadat*, Md Hamjajul Ashmafee, Abu Raihan Mostofa Kamal, Md Azam Hossain <br>

<p>
  <a class="transparent-button" href="https://openaccess.thecvf.com/content/WACV2025/papers/Ishmam_Visual_Robustness_Benchmark_for_Visual_Question_Answering_VQA_WACV_2025_paper.pdf" target="_blank" rel="noopener">Paper</a>
  <a class="transparent-button" href="https://openaccess.thecvf.com/content/WACV2025/supplemental/Ishmam_Visual_Robustness_Benchmark_WACV_2025_supplemental.pdf" target="_blank" rel="noopener">Supp</a>
  <a class="transparent-button" href="https://github.com/ishmamt/VQA-Visual-Robustness-Benchmark" target="_blank" rel="noopener">Code</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1uT4KG9YW7o_VTsYtsaVcf4iAVyktl1e0/view" target="_blank" rel="noopener">Poster</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/17uBXQkbWralJ1le3nU0p1HUJ-nSjRrYf/view" target="_blank" rel="noopener">Slides</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1TZFlTdcHcKIKArEVZmUfWKVzNZRNxZh8/view" target="_blank" rel="noopener">Video</a>
</p>

<div style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
    <img src="images/overviewVRE.png" style="border: 2px solid black;">
</div>

<ul style="font-size: 16px;">
  <li>Can VQA models maintain their performance in real-world scenarios, especially when prone to realistic visual corruptions, e.g. noise, blur?</li>
  <li>How can we evaluate the robustness of VQA models when subjected to such common corruptions?</li>
  <li>We propose a large-scale benchmark and robustness evaluation metrics to evaluate VQA models before deployment.</li>
  <li>We quantify aspects of performance drop, e.g. rate, range, mean. We found that models with higher accuracy are not necessarily more robust. </li>
<!--     <li>Large-scale benchmark comprising 213,000 augmented images to challenge the robustness of VQA models against realistic visual corruptions.</li>
    <li>Novel robustness evaluation metrics that can be aggregated into a unified metric adaptable for multiple use cases.</li>
    <li>Experiments reveal the interplay between factors, such as model size, performance, and robustness, when subjected to real-world corruption effects.</li> -->
</ul>

<h3>BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla</h3>

Md Fahim*, Fariha Tanjim Shifat*, <b>Md Farhan Ishmam*</b>, Deeparghya Dutta Barua, Fabiha Haider, Md Sakib Ul Rahman Sourove, Farhad Alam Bhuiyan
<br>

<p>
  <a class="transparent-button" href="https://aclanthology.org/2024.findings-emnlp.859.pdf" target="_blank" rel="noopener">Paper</a>
  <a class="transparent-button" href="https://github.com/farhanishmam/BanglaTLit" target="_blank" rel="noopener">Code</a>
  <a class="transparent-button" href="https://huggingface.co/datasets/aplycaebous/BanglaTLit" target="_blank" rel="noopener">Dataset</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1o3yzO-N7J2nj04b6pfGSv0WlCcQODW2S/view" target="_blank" rel="noopener">Poster</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1Nv-mRwBcE0U3IbDSUjiAy9XEdaXc5x1P/view" target="_blank" rel="noopener">Slides</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1MUZYADGQQl8OA9Z3BYTBJz96cE8p8C1D/view" target="_blank" rel="noopener">Video</a>
</p>

<div style="display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; width: 100%;">
    <img src="images/tLitOverview.PNG" style="border: 2px solid black; max-width: 38%; height: 76%; margin-right: 10px;">
    <img src="images/tLit.png" style="border: 2px solid black; max-width: 60%; height: auto;">
</div>

<ul style="font-size: 16px;">
    <li> How can we enhance the representation of Romanized Bangla for automatic back-transliteration using seq2seq models?</li>
    <li> We propose large-scale pre-training corpus and Bangla back-transliteration datasets for fully fine-tuning language encoders and seq2seq models.</li>
    <li> We aggregate representations from transliterated Bangla encoders with seq2seq models [Dual Encoders->Aggregation->Decoder architecture] to achieve SOTA on Bangla back-transliteration.</li>
</ul>

<h3>From Image to Language: A Critical Analysis of Visual Question Answering (VQA) Approaches, Challenges, and Opportunities</h3>

<b>Md Farhan Ishmam</b>, Md Sakib Hossain Shovon, Muhammad Firoz Mridha, Nilanjan Dey <br>

<p>
  <a class="transparent-button" href="https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484" target="_blank" rel="noopener">
    Information Fusion 2024
  </a>
</p>

<div style="display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; width: 100%;">
    <img src="images/vqaOverview.PNG" style="border: 2px solid black; max-width: 50%; height: 85%;  margin-right: 10px;">
    <img src="images/vqaApp.PNG" style="border: 2px solid black; max-width: 50%; height: auto;">
</div>

<ul style="font-size: 16px;">
    <li> Comprehensive survey on VQA datasets, methods, metrics, challenges, and research opportunities. </li>
    <li> New taxonomy that systematically categorizes VQA literature and multimodal learning tasks. </li>
    <li> Novel real-world applications of VQA in domains e.g. assistive technology, education, and healthcare. </li>
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

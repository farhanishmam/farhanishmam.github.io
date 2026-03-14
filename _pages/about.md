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

        /* ── Research Map ── */
        #research-map-section {
            margin-bottom: 28px;
        }

        #research-map {
            position: relative;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: linear-gradient(135deg, #fafbfc 0%, #f5f6f8 100%);
            overflow: hidden;
        }

        #research-map svg {
            display: block;
            width: 100%;
        }

        .rm-node {
            cursor: pointer;
        }

        .rm-node circle {
            transition: filter 0.15s, stroke-width 0.15s;
        }

        .rm-node:hover circle {
            filter: brightness(1.12) drop-shadow(0 0 5px rgba(0,0,0,0.2));
        }

        .rm-node-active circle {
            stroke: #333;
            stroke-width: 3px;
            filter: drop-shadow(0 0 6px rgba(0,0,0,0.25));
        }

        .rm-node text {
            pointer-events: none;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 10px;
            font-weight: 700;
            fill: #fff;
            text-anchor: middle;
            dominant-baseline: central;
            user-select: none;
        }

        .rm-edge {
            stroke: #d0d0d0;
            stroke-width: 1.5;
            stroke-opacity: 0.5;
            transition: stroke 0.15s, stroke-opacity 0.15s;
        }

        .rm-edge-active {
            stroke: #888 !important;
            stroke-width: 2.5 !important;
            stroke-opacity: 1 !important;
        }

        .rm-tooltip {
            position: absolute;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            padding: 16px 20px 14px;
            box-shadow: 0 6px 24px rgba(0,0,0,0.13);
            max-width: 320px;
            min-width: 200px;
            z-index: 10;
            font-size: 0.88em;
            line-height: 1.55;
            animation: rmFadeIn 0.15s ease;
        }

        @keyframes rmFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .rm-tooltip-title {
            font-weight: 700;
            margin-bottom: 2px;
            color: #222;
            font-size: 0.95em;
            padding-right: 22px;
        }

        .rm-tooltip-venue {
            font-size: 0.8em;
            color: #999;
            margin-bottom: 8px;
        }

        .rm-tooltip-tldr {
            color: #555;
            font-size: 0.9em;
        }

        .rm-tooltip-close {
            position: absolute;
            top: 10px;
            right: 14px;
            cursor: pointer;
            font-size: 16px;
            color: #bbb;
            background: none;
            border: none;
            padding: 0;
            line-height: 1;
        }

        .rm-tooltip-close:hover {
            color: #333;
        }

        .rm-legend {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 10px;
            padding: 0 2px;
        }

        .rm-legend-item {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.72em;
            color: #777;
        }

        .rm-legend-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        @media screen and (max-width: 600px) {
            .rm-tooltip {
                max-width: 240px;
                min-width: 160px;
                font-size: 0.82em;
            }
        }
    </style>

</head>
</html>
<p class="justified-text">
Hi, I'm Farhan, a graduate PhD student at KSoC, UofU. I obtained my Bachelor's degree from <a href = "https://cse.iutoic-dhaka.edu">IUT-CSE</a>. Currently, I am working with <a href = "http://kennethmarino.com/">Prof. Kenneth Marino</a> to build AI agents that help people.
<h2>News and Updates</h2>
<ul class="news-container">
  <li class="news-item"><strong>Mar 25:</strong> Check out <a href="https://timewarp-web.github.io/">TimeWarp</a>, a web agent benchmark on changing websites.</li>
  <li class="news-item"><strong>Feb 25:</strong> Our <a href="https://iclr-blogposts.github.io/2026/blog/2026/web-agent/">computer use survey</a> got accepted in the ICLR'26 Blogposts.</li>
  <li class="news-item"><strong>Dec 25:</strong> <a href="https://aclanthology.org/2025.banglalp-1.27/"> Transliteration Perturbations in Bangla </a> won the best paper award at BLP at IJCNLP-AACL'25! </li>
  <li class="news-item"><strong>Nov 25:</strong> 3 of my works got accepted at WACV'26!</li>
  <li class="news-item"><strong>Oct 25:</strong> <a href="https://frugalprompt.github.io/">FrugalPrompt</a> is out! </li>
  <li class="news-item"><strong>Aug 25:</strong> Started my PhD at the University of Utah!</li>
  <li class="news-item"><strong>June 25:</strong> <a href="https://arxiv.org/abs/2410.14991">ChitroJera</a>, got accepted at ECML-PKDD'25!</li>
  <li class="news-item"><strong>Mar 25:</strong> Attended WACV'25.</li>
  <li class="news-item"><strong>Jan 25:</strong> <a href="https://arxiv.org/abs/2410.13281">BanTH</a>, got accepted at Findings of NAACL'25!</li>
  <li class="news-item"><strong>Oct 24:</strong> <a href="https://arxiv.org/abs/2407.03386">Visual Robustness Benchmark for VQA</a> is accepted at WACV'25. I'm grateful to my wonderful teammates and advisors at IUT-CSE.</li>
  <li class="news-item"><strong>Oct 24:</strong> <a href="https://github.com/farhanishmam/BanglaTLit">FourierKAN outperforms MLP on Text Classification Head Fine-tuning</a> got accepted at <a href="https://sites.google.com/view/neurips2024-ftw">FITML</a> at NeurIPS'24. Shoutout to my teammate <a href="https://www.imranabdullah.com/about">Abdullah Al Imran</a>.</li>
  <li class="news-item"><strong>Sep 24:</strong> Our work on Bangla back-transliteration, <a href="https://github.com/farhanishmam/BanglaTLit">BanglaTLit</a> got accepted at Findings of EMNLP, 2024. Great work from team Penta!</li>
  <li class="news-item"><strong>Jul 24:</strong> New preprint on my undergrad thesis, <a href="https://arxiv.org/abs/2407.03386">Visual Robustness Benchmark for VQA</a>, is available on arXiv.</li>
  <li class="news-item"><strong>May 24:</strong> Finalists at Robi Datathon 3.0, Bangladesh's largest data analysis event with 3,500+ participants. Another competition with team Penta!</li>
  <li class="news-item"><strong>May 24:</strong> Participated in the <a href="http://nlp.uned.es/exist2024/">EXIST-2024</a> shared task with my amazing team from <a href="https://www.pentabd.com/">Penta Global</a>.</li>
  <li class="news-item"><strong>Jan 24:</strong> Our <a href="https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484">VQA Survey</a> got accepted at Information Fusion.</li>
</ul>

<div id="research-map-section">
  <h2 style="margin-top:0; margin-bottom:16px; padding-bottom:8px; border-bottom:2px solid #e0e0e0;">Research Map</h2>
  <p style="font-size:0.85em; color:#999; margin-top:-10px; margin-bottom:12px;">
    The research map will help you navigate through my research portfolio. Click any node for details.
  </p>
  <div id="research-map"></div>
  <div class="rm-legend" id="rm-legend"></div>
</div>

<h1>Research Highlights</h1>
<h2>TimeWarp: Evaluating Web Agents by Revisiting the Past</h2>
<p>
  <a class="transparent-button" href="https://timewarp-web.github.io/" target="_blank" rel="noopener">Project Page</a>
  <a class="transparent-button" href="https://arxiv.org/abs/2603.04949" target="_blank" rel="noopener">Paper</a>
  <a class="transparent-button" href="https://github.com/sparklabutah/timewarp" target="_blank" rel="noopener">Code</a>
  <a class="transparent-button" href="https://huggingface.co/datasets/sparklabutah/timewarp" target="_blank" rel="noopener">Dataset</a>
  <a class="transparent-button" href="https://huggingface.co/collections/sparklabutah/timewarp-models" target="_blank" rel="noopener">Models</a>
</p>

<div style="margin: 16px 0;">
    <img src="images/timeWarp.png" style="width: 100%; display: block; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.10);">
</div>

<strong>tldr.</strong> (a) a benchmark for evaluating web agents on temporal variations of web UI, (b) a method for scalably collecting trajectories across temporal versions, and (c) a method for behavior cloining web agents using planning, memory and reasoning. 

<h2>FrugalPrompt: Reducing Contextual Overhead in Large Language Models via Token Attribution</h2>
<p>
  <a class="transparent-button" href="https://frugalprompt.github.io/" target="_blank" rel="noopener">Project Page</a>
  <a class="transparent-button" href="https://arxiv.org/abs/2510.16439" target="_blank" rel="noopener">Paper</a>
  <a class="transparent-button" href="https://github.com/Starscream-11813/Frugal-ICL" target="_blank" rel="noopener">Code</a>
</p>

<div style="margin: 16px 0;">
    <img src="images/frugalPrompt.png" style="width: 100%; display: block; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.10);">
</div>

<strong>tldr.</strong> A token attribution-based prompt compression method that reduces contextual overhead in LLMs without significant performance degradation.

<h2>R-MMA: Enhancing Vision-Language Models with Recurrent Adapters for Few-Shot and Cross-Domain Generalization</h2>
<p>
  <a class="transparent-button" href="https://openaccess.thecvf.com/content/WACV2026/papers/Fahim_R-MMA_Enhancing_Vision-Language_Models_with_Recurrent_Adapters_for_Few-Shot_and_WACV_2026_paper.pdf" target="_blank" rel="noopener">Paper</a>
  <a class="transparent-button" href="https://openaccess.thecvf.com/content/WACV2026/supplemental/Fahim_R-MMA_Enhancing_Vision-Language_WACV_2026_supplemental.pdf" target="_blank" rel="noopener">Supp</a>
  <a class="transparent-button" href="https://github.com/farhanishmam/R-MMA" target="_blank" rel="noopener">Code</a>
  <a class="transparent-button" href="https://drive.google.com/file/d/1IqWWnOjGb71I6X0CRYpSBFqS9e4UNJHc/view" target="_blank" rel="noopener">Poster</a>
</p>

<div style="margin: 16px 0;">
    <img src="images/overviewRMMA.PNG" style="width: 100%; display: block; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.10);">
</div>

<strong>tldr.</strong> A multi-modal adapter that uses attention and shares weight across layers to improve few-shot generalization.

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

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function () {
    var topicColors = {
        agentic:     '#e74c3c',
        vla:         '#9b59b6',
        compression: '#f1c40f',
        vqa:         '#3498db',
        translit:    '#2ecc71',
        accessibility:'#1abc9c',
        textclass:   '#e67e22',
        harmful:     '#e91e63'
    };

    var topicLabels = {
        agentic:     'Agentic Systems',
        vla:         'Vision-Language Adapters',
        compression: 'Prompt Compression',
        vqa:         'Visual Question Answering',
        translit:    'Transliteration & Code-Mixing',
        accessibility:'Accessibility',
        textclass:   'Text Classification',
        harmful:     'Harmful Content'
    };

    var nodes = [
        { id: 'TW',   full: 'TimeWarp: Evaluating Web Agents by Revisiting the Past',                                     tldr: 'Benchmark for evaluating web agents on temporal variations of web UI, with scalable trajectory collection and a new way of behavior cloning.', topic: 'agentic',      venue: "ArXiv'26",             link: 'https://arxiv.org/abs/2603.04949' },
        { id: 'CUS',  full: 'Computer Use-Survey - A Visual Survey of Computer Use Agents',                               tldr: 'Interactive and visual survey of LLM/VLM agents doing computer tasks.', topic: 'agentic',      venue: "ICLR'26 Blogposts",    link: 'https://iclr-blogposts.github.io/2026/blog/2026/web-agent/' },
        { id: 'RMA',  full: 'R-MMA: Enhancing VLMs with Recurrent Adapters for Few-Shot and Cross-Domain Generalization', tldr: 'Multi-modal adapter using attention and weight sharing across layers to improve few-shot VLM generalization.', topic: 'vla',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Fahim_R-MMA_Enhancing_Vision-Language_Models_with_Recurrent_Adapters_for_Few-Shot_and_WACV_2026_paper.pdf' },
        { id: 'FP',   full: 'FrugalPrompt: Reducing Contextual Overhead in LLMs via Token Attribution',                  tldr: 'Token attribution-based prompt compression that reduces contextual overhead in LLMs without significant performance loss.', topic: 'compression',  venue: "ArXiv'26",             link: 'https://arxiv.org/abs/2510.16439' },
        { id: 'VCD',  full: 'Enhancing Vision Language Corruption Robustness using Cross Distribution & Prompted Denoisers', tldr: 'Mixture of Experts (MoE)-style visual denoisers and prompted LLM textual denoisers to improve robustness of VLMs against common corruptions.', topic: 'vqa',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Latif_Enhancing_Vision_Language_Corruption_Robustness_using_Cross-Distribution__Prompted_Denoisers_WACV_2026_paper.pdf' },
        { id: 'BP',   full: 'BanglaProtha: Evaluating VLMs in Underrepresented Long-tail Cultural Contexts',              tldr: 'Bengali cultural VQA dataset that evalautes the long-tail cultural understanding of VLMs.', topic: 'vqa',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Fahim_BanglaProtha_Evaluating_Vision_Language_Models_in_Underrepresented_Long-tail_Cultural_Contexts_WACV_2026_paper.pdf' },
        { id: 'VRB',  full: 'Visual Robustness Benchmark for Visual Question Answering (VQA)',                             tldr: 'Benchmark for evaluating visual robustness of VQA models against common corruptions.', topic: 'vqa',          venue: "WACV'25",              link: 'https://openaccess.thecvf.com/content/WACV2025/papers/Ishmam_Visual_Robustness_Benchmark_for_Visual_Question_Answering_VQA_WACV_2025_paper.pdf' },
        { id: 'CJ',   full: 'ChitroJera: A Regionally Relevant VQA Dataset for Bangla',                                  tldr: 'Bangla VQA dataset with images from the Bangla-speaking region.', topic: 'vqa',          venue: "ECML-PKDD'25",         link: 'https://ecmlpkdd-storage.s3.eu-central-1.amazonaws.com/preprints/2025/research/preprint_ecml_pkdd_2025_research_1389.pdf' },
        { id: 'VQS',  full: 'From Image to Language: A Critical Analysis of VQA Approaches, Challenges, and Opportunities', tldr: 'Survey that analyzes VQA in the broader stage of multimodal problems, all approaches (datasets, methods, and evaluation), challenges, and open problems.', topic: 'vqa',          venue: "Information Fusion'24", link: 'https://www.sciencedirect.com/article/abs/pii/S1566253524000484' },
        { id: 'TPB',  full: 'Robustness of LLMs to Transliteration Perturbations in Bangla',                              tldr: 'Studying how robust LLMs are to perturbing Bangla NLP tasks using English scripts.', topic: 'translit',     venue: "BLP@AACL'25 🏆 Best Paper", link: 'https://aclanthology.org/2025.banglalp-1.27.pdf' },
        { id: 'BTL',  full: 'BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla',              tldr: 'Benchmark dataset and models for converting Romanized Bangla text back to native Bangla.', topic: 'translit',     venue: "EMNLP'24 Findings",    link: 'https://aclanthology.org/2024.findings-emnlp.859.pdf' },
        { id: 'BTH',  full: 'BanTH: A Multi-label Hate Speech Detection Dataset for Transliterated Bangla',               tldr: 'Mult-label hate detection dataset in Bangla with a translation-based prompting strategy.', topic: 'translit',     venue: "NAACL'25 Findings",    link: 'https://arxiv.org/abs/2410.13281' },
        { id: 'BSM',  full: 'BnSentMix: A Diverse Bengali-English Code-Mixed Dataset for Sentiment Analysis',             tldr: 'Bengali-English code-mixed dataset for sentiment analysis.', topic: 'translit',     venue: "LoResLM@COLING'25",    link: 'https://aclanthology.org/2025.loreslm-1.4.pdf' },
        { id: 'SPIP', full: 'Prompting with Sign Parameters for Low-resource Sign Language Instruction Generation',       tldr: 'Prompting method using sign language parameters for generating instructions to teach sign language in low-resource settings.', topic: 'accessibility', venue: "CV4A11y@ICCV'25",      link: 'https://openreview.net/forum?id=KkVMBkjbra' },
        { id: 'FKAN', full: 'FourierKAN outperforms MLP on Text Classification Head Fine-tuning',                         tldr: 'Replacing MLP classification heads with FourierKAN layers improves pre-trained transformer text classification.', topic: 'textclass',    venue: "FITML@NeurIPS'24",     link: 'https://openreview.net/pdf?id=xqNDuVxThU' },
        { id: 'PNL',  full: 'Penta NLP at EXIST 2024: Sexism Identification, Source Intention, Sexism Categorization',   tldr: 'Detecting sexism, identifying the intention of the person, and labeling the sexism types in tweets.', topic: 'harmful',      venue: "EXIST@CLEF'24",        link: 'https://ceur-ws.org/Vol-3740/paper-114.pdf' },
        { id: 'PML',  full: 'Penta ML at EXIST 2024: Tagging Sexism with Attention-enhanced Modal Context',               tldr: 'Detecting sexism in memes, classifying the intention behind the meme, and labeling sexism types in memes.', topic: 'harmful',      venue: "EXIST@CLEF'24",        link: 'https://ceur-ws.org/Vol-3740/paper-90.pdf' }
    ];

    var links = [
        { source: 'TW',  target: 'CUS'  },
        { source: 'VCD', target: 'VRB'  },
        { source: 'BP',  target: 'CJ'   },
        { source: 'TPB', target: 'BTL'  },
        { source: 'TPB', target: 'BTH'  },
        { source: 'BTL', target: 'BTH'  },
        { source: 'PNL', target: 'PML'  },
        { source: 'VRB', target: 'VQS'  },
        { source: 'CJ',  target: 'VQS'  },
        { source: 'BP',  target: 'VQS'  },
        { source: 'VCD', target: 'VQS'  },
        { source: 'RMA', target: 'VQS'  },
        { source: 'CUS', target: 'VQS'  },
        { source: 'SPIP', target: 'VQS'  },
        { source: 'BTL', target: 'BSM'  },
        { source: 'TPB', target: 'BSM'  },
        { source: 'BTH', target: 'BSM'  },
        { source: 'BTH', target: 'PNL'  },
        { source: 'PML', target: 'BTH'  },
        { source: 'FP',  target: 'FKAN' },
        { source: 'PML', target: 'FKAN' },
        { source: 'PNL', target: 'FKAN' },
        { source: 'BTH', target: 'FKAN' },
        { source: 'BSM', target: 'FKAN' },
    ];

    var container = document.getElementById('research-map');
    if (!container) return;
    var width = container.clientWidth || 760;
    var height = 430;

    var svg = d3.select('#research-map')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('cursor', 'grab');

    var defs = svg.append('defs');
    Object.keys(topicColors).forEach(function(key) {
        var grad = defs.append('radialGradient')
            .attr('id', 'grad-' + key);
        grad.append('stop').attr('offset', '0%').attr('stop-color', d3.color(topicColors[key]).brighter(0.4));
        grad.append('stop').attr('offset', '100%').attr('stop-color', topicColors[key]);
    });

    var bthGrad = defs.append('linearGradient')
        .attr('id', 'grad-bth-split')
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '0%');
    bthGrad.append('stop').attr('offset', '0%').attr('stop-color', topicColors['translit']);
    bthGrad.append('stop').attr('offset', '33.3%').attr('stop-color', topicColors['translit']);
    bthGrad.append('stop').attr('offset', '33.3%').attr('stop-color', topicColors['harmful']);
    bthGrad.append('stop').attr('offset', '66.6%').attr('stop-color', topicColors['harmful']);
    bthGrad.append('stop').attr('offset', '66.6%').attr('stop-color', topicColors['textclass']);
    bthGrad.append('stop').attr('offset', '100%').attr('stop-color', topicColors['textclass']);

    var bsmGrad = defs.append('linearGradient')
        .attr('id', 'grad-bsm-split')
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '0%');
    bsmGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['translit']);
    bsmGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['textclass']);

    var pmlGrad = defs.append('linearGradient')
        .attr('id', 'grad-pml-split')
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '0%');
    pmlGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['harmful']);
    pmlGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['textclass']);

    var pnlGrad = defs.append('linearGradient')
        .attr('id', 'grad-pnl-split')
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '0%');
    pnlGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['harmful']);
    pnlGrad.append('stop').attr('offset', '50%').attr('stop-color', topicColors['textclass']);

    var simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(function(d) { return d.id; }).distance(90))
        .force('charge', d3.forceManyBody().strength(-260))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(30))
        .force('x', d3.forceX(width / 2).strength(0.06))
        .force('y', d3.forceY(height / 2).strength(0.06));

    var zoomGroup = svg.append('g');
    var linkGroup = zoomGroup.append('g');
    var nodeGroup = zoomGroup.append('g');

    var zoom = d3.zoom()
        .scaleExtent([0.3, 4])
        .on('zoom', function(event) {
            zoomGroup.attr('transform', event.transform);
            svg.style('cursor', event.sourceEvent && event.sourceEvent.type === 'mousemove' ? 'grabbing' : 'grab');
        });

    svg.call(zoom);

    container.addEventListener('wheel', function(e) { e.preventDefault(); }, { passive: false });

    var controls = d3.select('#research-map')
        .append('div')
        .style('position', 'absolute')
        .style('top', '10px')
        .style('right', '10px')
        .style('display', 'flex')
        .style('flex-direction', 'column')
        .style('gap', '4px')
        .style('z-index', '5');

    var btnStyle = 'width:26px;height:26px;border:1px solid #ddd;border-radius:5px;background:#fff;cursor:pointer;font-size:15px;line-height:1;color:#555;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 3px rgba(0,0,0,0.1);';

    controls.append('button').attr('style', btnStyle).text('+')
        .on('click', function() { svg.transition().duration(250).call(zoom.scaleBy, 1.4); });
    controls.append('button').attr('style', btnStyle).text('−')
        .on('click', function() { svg.transition().duration(250).call(zoom.scaleBy, 1 / 1.4); });
    controls.append('button').attr('style', btnStyle + 'font-size:10px;').text('⟳')
        .on('click', function() { svg.transition().duration(350).call(zoom.transform, d3.zoomIdentity); });

    var link = linkGroup.selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'rm-edge');

    var node = nodeGroup.selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', 'rm-node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    node.append('circle')
        .attr('r', 24)
        .attr('fill', function(d) {
            if (d.id === 'BTH') return 'url(#grad-bth-split)';
            if (d.id === 'PML') return 'url(#grad-pml-split)';
            if (d.id === 'PNL') return 'url(#grad-pnl-split)';
            if (d.id === 'BSM') return 'url(#grad-bsm-split)';
            return 'url(#grad-' + d.topic + ')';
        })
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

    node.append('text')
        .text(function(d) { return d.id; });

    node.on('click', function(event, d) {
        event.stopPropagation();

        node.classed('rm-node-active', false);
        link.classed('rm-edge-active', false);

        d3.select(this).classed('rm-node-active', true);
        link.classed('rm-edge-active', function(l) {
            return l.source.id === d.id || l.target.id === d.id;
        });

        showTooltip(d, event);
    });

    svg.on('click', function() {
        d3.select('.rm-tooltip').remove();
        node.classed('rm-node-active', false);
        link.classed('rm-edge-active', false);
    });

    function showTooltip(d, event) {
        d3.select('.rm-tooltip').remove();

        var rect = container.getBoundingClientRect();
        var x = event.clientX - rect.left + 14;
        var y = event.clientY - rect.top - 10;

        if (x + 330 > width) x = x - 350;
        if (y + 140 > height) y = y - 130;
        if (x < 8) x = 8;
        if (y < 8) y = 8;

        var topicDot = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:'
            + topicColors[d.topic] + ';margin-right:4px;vertical-align:middle;"></span>';

        var tooltip = d3.select('#research-map')
            .append('div')
            .attr('class', 'rm-tooltip')
            .style('left', x + 'px')
            .style('top', y + 'px');

        var linkIcon = d.link
            ? ' <a href="' + d.link + '" target="_blank" rel="noopener" onclick="event.stopPropagation();" title="Open paper" style="display:inline-flex;align-items:center;vertical-align:middle;margin-left:5px;color:#3498db;text-decoration:none;flex-shrink:0;">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
              '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>'
            : '';

        tooltip.html(
            '<button class="rm-tooltip-close" onclick="this.parentElement.remove();event.stopPropagation();">&times;</button>' +
            '<div class="rm-tooltip-title" style="display:flex;align-items:flex-start;gap:4px;">' +
            '<span>' + d.full + '</span>' + linkIcon + '</div>' +
            '<div class="rm-tooltip-venue">' + topicDot + d.venue + '</div>' +
            '<div class="rm-tooltip-tldr"><strong>TL;DR:</strong> ' + d.tldr + '</div>'
        );
    }

    simulation.on('tick', function() {
        link
            .attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });

        node.attr('transform', function(d) {
            return 'translate(' + d.x + ',' + d.y + ')';
        });
    });

    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        svg.style('cursor', 'grabbing');
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }
    function dragged(event) {
        var t = d3.zoomTransform(svg.node());
        event.subject.fx = t.invertX(event.x);
        event.subject.fy = t.invertY(event.y);
    }
    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        svg.style('cursor', 'grab');
        event.subject.fx = null;
        event.subject.fy = null;
    }

    var legendEl = document.getElementById('rm-legend');
    if (legendEl) {
        Object.keys(topicLabels).forEach(function(key) {
            var item = document.createElement('span');
            item.className = 'rm-legend-item';
            item.innerHTML = '<span class="rm-legend-dot" style="background:' + topicColors[key] + '"></span>' + topicLabels[key];
            legendEl.appendChild(item);
        });
    }
})();
</script>

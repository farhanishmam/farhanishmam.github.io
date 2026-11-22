
(function () {
    var topicColors = {
        agentic:     '#e74c3c',
        creativity:  '#8d6e63',
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
        creativity:  'LLM Creativity',
        vla:         'Vision-Language Models',
        compression: 'Prompt Compression',
        vqa:         'Visual Question Answering',
        translit:    'Transliteration & Code-Mixing',
        accessibility:'Accessibility',
        textclass:   'Text Classification',
        harmful:     'Harmful Content'
    };

    var nodes = [
        { id: 'DUEL', full: 'Alice and Bob Surf the Web: Co-training VLMs to Create and Solve Web Tasks', tldr: 'DuelWeb co-trains two web agents on one open-weight VLM: Alice explores the live web, a frozen relabeler turns the page she reaches into a task, and she is rewarded when Bob fails it, so Bob keeps improving without a teacher model or human-written tasks.', topic: 'agentic', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1SjHTwCs1pUTsg4OWJJBH0PzJdTj__NqZ/view?usp=sharing' }] },
        { id: 'DYNA', full: 'DynaWebBench: Adaptive Evaluation of Visual Web Agents', tldr: 'DynaWebBench tests six capabilities of visual web agents separately at four difficulty tiers; its adaptive protocol skips tiers whose outcome is already clear, cutting the cost of each evaluation run.', topic: 'agentic', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1qa0ucGuNBMojWtu0Fxl3zfkZ-xNpMWSA/view?usp=sharing' }] },
        { id: 'MDR', full: 'MDR: Localized Test-Time Rectification of Adversarial Images for Web Agents', tldr: 'MDR is a test-time defense for multimodal web agents that localizes adversarially perturbed images in a screenshot and rectifies only those regions, leaving the rest of the page intact.', topic: 'agentic', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1HVgMAdrZnQf-IiirAWh7FyuXtevMvFDW/view?usp=sharing' }] },
        { id: 'MW', full: 'Back to Basics: A Skill-Centric Approach to Generalist Web Agents', tldr: 'MiniWeb benchmarks reusable web-agent skills across 65 websites; targeted skill practice paired with a planner improves full-task success and transfers to other benchmarks.', topic: 'agentic', venue: "ArXiv'26", resources: [{ label: 'Project Page', href: 'https://minhphd.github.io/miniweb/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2610.35823' }, { label: 'Code', href: 'https://github.com/sparklabutah/MiniWeb' }] },
        { id: 'WKD', full: 'Teaching Agents in their Own Style: Blackbox Teacher Distillation for Web Agents', tldr: "WebKD trains smaller web agents with black-box teacher feedback that corrects failed trajectories in the student's own style.", topic: 'agentic', venue: "ArXiv'26", resources: [{ label: 'Project Page', href: 'https://web-teach-kd.github.io/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2610.19834' }, { label: 'Code', href: 'https://github.com/sparklabutah/webkd' }] },
        { id: 'WM',   full: "Don't Retrain, Remix: Adaptation of Web Agents using Mixture Hypernetworks", tldr: 'WebMix combines learned LoRA adapters using a mixture hypernetwork, helping web agents adapt to unseen domains and changed interfaces without retraining.', topic: 'agentic', venue: "ArXiv'26", resources: [{ label: 'Project Page', href: 'https://webmix-hyper.github.io/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2610.22539' }, { label: 'Code', href: 'https://github.com/sparklabutah/hyperweb' }] },
        { id: 'SLM', full: 'SLMs are Almost Zero-shot Agents', tldr: 'Small language models are closer to expert agents than they look: a per-layer residual offset (0.005% of parameters) trained on expert trajectories, with every weight frozen, lifts a 0.6B model from 0% to 79% on ALFWorld, within 6 points of its expert, with large gains on BabyAI and WebShop.', topic: 'agentic', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1EKNgVdj_PClIZ3Hz1LeUVpF3__09tAy_/view?usp=sharing' }] },
        { id: 'TW',   full: 'TimeWarp: Evaluating Web Agents by Revisiting the Past',                                    tldr: 'Benchmark for evaluating web agents on temporal variations of web UI, with scalable trajectory collection and a new way of behavior cloning.', topic: 'agentic',      venue: "NeurIPS'26 Evaluations and Datasets",             link: 'https://arxiv.org/abs/2603.04949' },
        { id: 'DORA', full: 'DORA Explorer: Improving the Exploration Ability of LLMs Without Training', tldr: 'DORA improves LLM-agent exploration without training by ranking candidate actions with sequence-level scores and sampling them to avoid repetitive loops.', topic: 'agentic', venue: "EACL'26 Findings", resources: [{ label: 'Project Page', href: 'https://dora-explore.github.io/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2604.17244' }, { label: 'Code', href: 'https://github.com/sparklabutah/DORA_explorer' }] },
        { id: 'QC', full: 'QualCoder: A Quality-Driven Multi-Agent Framework for Automated Code Generation', tldr: 'QualCoder is a five-agent code-generation framework whose quality-assurance agent gates plans before implementation and reviews failing code; each agent can run on a different LLM.', topic: 'agentic', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1IgsgLKCWb4lfqQ7UyNVScoYx6J08XUan/view?usp=sharing' }] },
        { id: 'CUS',  full: 'Computer Use Survey - A Visual Survey of Computer Use Agents',                               tldr: 'Interactive and visual survey of LLM/VLM agents doing computer tasks.', topic: 'agentic',      venue: "ICLR'26 Blogposts",    link: 'https://iclr-blogposts.github.io/2026/blog/2026/web-agent/' },
        { id: 'KNOWS', full: 'The Hard Part Comes After Search: Benchmarking Web Agents on Synthesizing, Organizing, and Displaying Knowledge', tldr: 'KNOWS benchmarks web agents on turning retrieved information into finished documents, slides, and spreadsheets; even the best agent fully succeeds on fewer than 3% of tasks.', topic: 'agentic', venue: "EMNLP'26 Findings", resources: [{ label: 'Project Page', href: 'https://alexgill321.github.io/KNOWS-benchmark/#' }, { label: 'Paper', href: 'https://arxiv.org/abs/2609.30604' }, { label: 'Code', href: 'https://github.com/alexgill321/KNOWS-benchmark' }, { label: 'Dataset', href: 'https://huggingface.co/datasets/utahnlp/knows-benchmark' }] },
        { id: 'NNG', full: 'Can LLMs Tell Stories Out of Order? A Corpus and Benchmark for Nonlinear Narrative Generation', tldr: 'A benchmark of 83 published works shows that LLMs favor chronological storytelling and struggle to produce coherent nonlinear narratives, even when explicitly instructed.', topic: 'creativity', venue: "ArXiv'26", resources: [{ label: 'Project Page', href: 'https://nonlinear-narrative.github.io/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2610.21468' }, { label: 'Code', href: 'https://github.com/Starscream-11813/LLM-nonlinear-storytelling' }] },
        { id: 'VC', full: 'VisCurate: Evaluating Behavioral Equivalence of Visual Skills', tldr: 'VisCurate curates visual skill libraries from observed behavior instead of text: it runs skill pairs on shared image probes and assigns behavioral relations that map to safe library edits.', topic: 'vla', venue: "WACV'27", resources: [{ label: 'Project Page', href: 'https://farhanishraq17.github.io/Viscurate-Website/' }, { label: 'Paper', href: 'https://arxiv.org/abs/2610.30405' }, { label: 'Code', href: 'https://github.com/farhanishraq17/VisCurate-' }] },
        { id: 'TYPE', full: 'How Should We Typeset for Vision-Language Models?', tldr: "When a prompt reaches a VLM as pixels, font size is best set in pixels and line spacing as a fixed distance between baselines; Typst's default spacing costs 7.5-9.2 points on long passages, and each choice is priced in tokens against the same prompt as text.", topic: 'vla', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/1fLSmpPOImdU6Uypq_Xx8ua4VucB8phmb/view?usp=sharing' }] },
        { id: 'WSPO', full: 'M-WSPO: Weak-to-Strong Preference Optimization for Visually Grounded Multimodal Alignment', tldr: 'M-WSPO aligns a stronger multimodal model with preferences learned by a weak model pair, transferring both response preference and visual grounding to reduce hallucinations without stronger supervision.', topic: 'vla', venue: 'Under review, 2026', resources: [{ label: 'Paper', href: 'https://drive.google.com/file/d/19Ca2ejkSLGe9cF_9O8kPvG99X0UKGQ3o/view?usp=sharing' }] },
        { id: 'RMA',  full:'R-MMA: Enhancing VLMs with Recurrent Adapters for Few-Shot and Cross-Domain Generalization', tldr: 'Multi-modal adapter using attention and weight sharing across layers to improve few-shot VLM generalization.', topic: 'vla',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Fahim_R-MMA_Enhancing_Vision-Language_Models_with_Recurrent_Adapters_for_Few-Shot_and_WACV_2026_paper.pdf' },
        { id: 'FP',   full: 'FrugalPrompt: Reducing Contextual Overhead in LLMs via Token Attribution',                  tldr: 'Token attribution-based prompt compression that reduces contextual overhead in LLMs without significant performance loss.', topic: 'compression',  venue: "LUHME@EMNLP'26",       link: 'https://arxiv.org/abs/2510.16439' },
        { id: 'VCD',  full: 'Enhancing Vision Language Corruption Robustness using Cross Distribution & Prompted Denoisers', tldr: 'Mixture of Experts (MoE)-style visual denoisers and prompted LLM textual denoisers to improve robustness of VLMs against common corruptions.', topic: 'vqa',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Latif_Enhancing_Vision_Language_Corruption_Robustness_using_Cross-Distribution__Prompted_Denoisers_WACV_2026_paper.pdf' },
        { id: 'BP',   full: 'BanglaProtha: Evaluating VLMs in Underrepresented Long-tail Cultural Contexts',              tldr: 'Bengali cultural VQA dataset that evalautes the long-tail cultural understanding of VLMs.', topic: 'vqa',          venue: "WACV'26",              link: 'https://openaccess.thecvf.com/content/WACV2026/papers/Fahim_BanglaProtha_Evaluating_Vision_Language_Models_in_Underrepresented_Long-tail_Cultural_Contexts_WACV_2026_paper.pdf' },
        { id: 'VRB',  full: 'Visual Robustness Benchmark for Visual Question Answering (VQA)',                             tldr: 'Benchmark for evaluating visual robustness of VQA models against common corruptions.', topic: 'vqa',          venue: "WACV'25",              link: 'https://openaccess.thecvf.com/content/WACV2025/papers/Ishmam_Visual_Robustness_Benchmark_for_Visual_Question_Answering_VQA_WACV_2025_paper.pdf' },
        { id: 'CJ',   full: 'ChitroJera: A Regionally Relevant VQA Dataset for Bangla',                                  tldr: 'Bangla VQA dataset with images from the Bangla-speaking region.', topic: 'vqa',          venue: "ECML-PKDD'25",         link: 'https://ecmlpkdd-storage.s3.eu-central-1.amazonaws.com/preprints/2025/research/preprint_ecml_pkdd_2025_research_1389.pdf' },
        { id: 'VQS',  full: 'From Image to Language: A Critical Analysis of VQA Approaches, Challenges, and Opportunities', tldr: 'Survey that analyzes VQA in the broader stage of multimodal problems, all approaches (datasets, methods, and evaluation), challenges, and open problems.', topic: 'vqa',          venue: "Information Fusion'24", link: 'https://www.sciencedirect.com/science/article/abs/pii/S1566253524000484' },
        { id: 'TPB',  full: 'Robustness of LLMs to Transliteration Perturbations in Bangla',                              tldr: 'Studying how robust LLMs are to perturbing Bangla NLP tasks using English scripts.', topic: 'translit',     venue: "BLP@AACL'25 🏆 Best Paper", link: 'https://aclanthology.org/2025.banglalp-1.27.pdf' },
        { id: 'BTL',  full: 'BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla',              tldr: 'Benchmark dataset and models for converting Romanized Bangla text back to native Bangla.', topic: 'translit',     venue: "EMNLP'24 Findings",    link: 'https://aclanthology.org/2024.findings-emnlp.859.pdf' },
        { id: 'BTH',  full: 'BanTH: A Multi-label Hate Speech Detection Dataset for Transliterated Bangla',               tldr: 'Mult-label hate detection dataset in Bangla with a translation-based prompting strategy.', topic: 'translit',     venue: "NAACL'25 Findings",    link: 'https://arxiv.org/abs/2410.13281' },
        { id: 'BSM',  full: 'BnSentMix: A Diverse Bengali-English Code-Mixed Dataset for Sentiment Analysis',             tldr: 'Bengali-English code-mixed dataset for sentiment analysis.', topic: 'translit',     venue: "LoResLM@COLING'25",    link: 'https://aclanthology.org/2025.loreslm-1.4.pdf' },
        { id: 'SPIP', full: 'Prompting with Sign Parameters for Low-resource Sign Language Instruction Generation',       tldr: 'Prompting method using sign language parameters for generating instructions to teach sign language in low-resource settings.', topic: 'accessibility', venue: "CV4A11y@ICCV'25",      link: 'https://openreview.net/forum?id=KkVMBkjbra' },
        { id: 'FKAN', full: 'FourierKAN outperforms MLP on Text Classification Head Fine-tuning',                         tldr: 'Replacing MLP classification heads with FourierKAN layers improves pre-trained transformer text classification.', topic: 'textclass',    venue: "FITML@NeurIPS'24",     link: 'https://openreview.net/pdf?id=xqNDuVxThU' },
        { id: 'BHX', full: 'BanHADEX: Towards Explainable HAte Speech Detection in Bangla Using Human Annotated EXplanation', tldr: 'BanHADEX is the first Bangla hate speech dataset with human-written explanations: 19,203 YouTube comments labeled for hate, seven hate categories, and seven target groups.', topic: 'harmful', venue: "ACL'26", resources: [{ label: 'Paper', href: 'https://aclanthology.org/2026.acl-long.2022/' }, { label: 'Code', href: 'https://github.com/MOSHIIUR/BANHADEX' }, { label: 'Dataset', href: 'https://huggingface.co/datasets/pltops/BANHADEX' }] },
        { id: 'PNL',  full:'Penta NLP at EXIST 2024: Sexism Identification, Source Intention, Sexism Categorization',   tldr: 'Detecting sexism, identifying the intention of the person, and labeling the sexism types in tweets.', topic: 'harmful',      venue: "EXIST@CLEF'24",        link: 'https://ceur-ws.org/Vol-3740/paper-114.pdf' },
        { id: 'PML',  full: 'Penta ML at EXIST 2024: Tagging Sexism with Attention-enhanced Modal Context',               tldr: 'Detecting sexism in memes, classifying the intention behind the meme, and labeling sexism types in memes.', topic: 'harmful',      venue: "EXIST@CLEF'24",        link: 'https://ceur-ws.org/Vol-3740/paper-90.pdf' }
    ];

    var links = [
        { source: 'DUEL', target: 'TW'  },
        { source: 'DUEL', target: 'WKD' },
        { source: 'DUEL', target: 'CUS' },
        { source: 'DYNA', target: 'TW'  },
        { source: 'DYNA', target: 'KNOWS' },
        { source: 'DYNA', target: 'CUS' },
        { source: 'MDR', target: 'DYNA' },
        { source: 'MDR', target: 'CUS'  },
        { source: 'MDR', target: 'VCD'  },
        { source: 'SLM', target: 'WKD'  },
        { source: 'SLM', target: 'DORA' },
        { source: 'QC',  target: 'CUS'  },
        { source: 'VC',  target: 'MW'   },
        { source: 'VC',  target: 'RMA'  },
        { source: 'TYPE', target: 'RMA' },
        { source: 'TYPE', target: 'VRB' },
        { source: 'WSPO', target: 'RMA' },
        { source: 'WSPO', target: 'VQS' },
        { source: 'BHX', target: 'BTH'  },
        { source: 'BHX', target: 'PNL'  },
        { source: 'MW', target: 'TW'   },
        { source: 'MW', target: 'WKD'  },
        { source: 'WKD', target: 'TW'   },
        { source: 'WKD', target: 'WM'   },
        { source: 'WKD', target: 'CUS'  },
        { source: 'WM',  target: 'TW'   },
        { source: 'WM',  target: 'CUS'  },
        { source: 'TW',  target: 'CUS'  },
        { source: 'DORA', target: 'MW' },
        { source: 'DORA', target: 'CUS' },
        { source: 'KNOWS', target: 'TW' },
        { source: 'KNOWS', target: 'CUS' },
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
    if (!container || typeof d3 === 'undefined') return;
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

    svg.call(zoom).on('wheel.zoom', null);
    svg.attr('viewBox', '0 0 ' + width + ' ' + height);
    svg.attr('role', 'group').attr('aria-label', 'Research connections');

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

    controls.append('button').attr('aria-label', 'Zoom in').attr('style', btnStyle).text('+')
        .on('click', function() { svg.transition().duration(250).call(zoom.scaleBy, 1.4); });
    controls.append('button').attr('aria-label', 'Zoom out').attr('style', btnStyle).text('−')
        .on('click', function() { svg.transition().duration(250).call(zoom.scaleBy, 1 / 1.4); });
    controls.append('button').attr('aria-label', 'Reset map').attr('style', btnStyle + 'font-size:10px;').text('⟳')
        .on('click', function() { svg.transition().duration(350).call(zoom.transform, d3.zoomIdentity); });

    var link = linkGroup.selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'rm-edge');

    var node = nodeGroup.selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', 'rm-node')
        .attr('role', 'button')
        .attr('tabindex', 0)
        .attr('aria-label', function(d) { return d.full; })
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

    node.on('keydown', function(event, d) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            var rect = this.getBoundingClientRect();
            showTooltip(d, {clientX: rect.left, clientY: rect.bottom});
        }
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

        var currentWidth = container.clientWidth;
        if (x + 330 > currentWidth) x = x - 350;
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
            ? ' <a href="' + d.link + '" target="_blank" rel="noopener" onclick="event.stopPropagation();" title="Open paper" style="display:inline-flex;align-items:center;vertical-align:middle;margin-left:5px;color:#315c49;text-decoration:none;flex-shrink:0;">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
              '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>'
            : '';

        var resources = d.resources
            ? '<div class="rm-tooltip-resources">' + d.resources.map(function(resource) {
                return '<a href="' + resource.href + '" target="_blank" rel="noopener" onclick="event.stopPropagation();">' + resource.label + '</a>';
              }).join('') + '</div>'
            : '';

        tooltip.html(
            '<button aria-label="Close paper details" class="rm-tooltip-close" onclick="this.parentElement.remove();event.stopPropagation();">&times;</button>' +
            '<div class="rm-tooltip-title" style="display:flex;align-items:flex-start;gap:4px;">' +
            '<span>' + d.full + '</span>' + linkIcon + '</div>' +
            '<div class="rm-tooltip-venue">' + topicDot + d.venue + '</div>' +
            '<div class="rm-tooltip-tldr"><strong>TL;DR:</strong> ' + d.tldr + '</div>' + resources
        );
        var card = tooltip.node();
        tooltip.style('left', Math.max(8, Math.min(x, currentWidth - card.offsetWidth - 8)) + 'px')
            .style('top', Math.max(8, Math.min(y, container.clientHeight - card.offsetHeight - 8)) + 'px');
    }

    // Keep every node (radius 24 + stroke) inside the frame; without this the
    // repulsion pushes outer nodes past the top and bottom edges.
    var edgePad = 28;
    simulation.on('tick', function() {
        nodes.forEach(function(d) {
            d.x = Math.max(edgePad, Math.min(width - edgePad, d.x));
            d.y = Math.max(edgePad, Math.min(height - edgePad, d.y));
        });
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

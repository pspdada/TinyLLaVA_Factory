Search.setIndex({"alltitles": {"CONTENTS": [[7, null]], "Data module": [[0, "module-Data"]], "Evaluation": [[1, "evaluation"]], "GET STARTED": [[7, null]], "GQA": [[1, "gqa"]], "Installation": [[2, "installation"]], "LLaVA dataset": [[4, "id1"]], "MM-Vet": [[1, "mm-vet"]], "MME": [[1, "mme"]], "MMMU": [[1, "mmmu"]], "Model module": [[3, "module-Model"]], "Organize Data": [[1, "organize-data"], [4, "organize-data"]], "POPE": [[1, "pope"]], "Prepare Datasets": [[4, "prepare-datasets"]], "ScienceQA": [[1, "scienceqa"]], "ShareGPT4V dataset": [[4, "id2"]], "TextVQA": [[1, "textvqa"]], "Train": [[5, "train"]], "Training module": [[6, "module-Training"]], "VQAv2": [[1, "vqav2"]], "Welcome to TinyLLaVA_Factory\u2019s Documentation!": [[7, "welcome-to-tinyllava-factory-s-documentation"]], "src": [[8, "src"]]}, "docnames": ["Data", "Evaluation", "Installation", "Model", "Prepare Datasets", "Train", "Training", "index", "modules"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2}, "filenames": ["Data.rst", "Evaluation.rst", "Installation.rst", "Model.rst", "Prepare Datasets.rst", "Train.rst", "Training.rst", "index.rst", "modules.rst"], "indexentries": {}, "objects": {"": [[0, 0, 0, "-", "Data"], [3, 0, 0, "-", "Model"], [6, 0, 0, "-", "Training"]], "Data": [[0, 1, 1, "", "DataCollatorForSupervisedDataset"], [0, 1, 1, "", "ImagePreprocess"], [0, 1, 1, "", "LazySupervisedDataset"], [0, 1, 1, "", "Template"], [0, 1, 1, "", "TextPreprocess"], [0, 3, 1, "", "make_supervised_data_module"]], "Data.DataCollatorForSupervisedDataset": [[0, 2, 1, "", "call"]], "Data.ImagePreprocess": [[0, 2, 1, "", "call"], [0, 2, 1, "", "init"]], "Data.LazySupervisedDataset": [[0, 2, 1, "", "init"]], "Data.TextPreprocess": [[0, 2, 1, "", "call"], [0, 2, 1, "", "init"]], "Model": [[3, 1, 1, "", "Connector"], [3, 3, 1, "", "ConnectorFactory"], [3, 3, 1, "", "LLMFactory"], [3, 1, 1, "", "TinyLlavaForConditionalGeneration"], [3, 1, 1, "", "TinyLlavaPreTrainedModel"], [3, 1, 1, "", "VisionTower"], [3, 3, 1, "", "VisionTowerFactory"], [3, 3, 1, "", "register_connector"], [3, 3, 1, "", "register_llm"], [3, 3, 1, "", "register_vision_tower"]], "Model.Connector": [[3, 2, 1, "", "init"]], "Model.TinyLlavaForConditionalGeneration": [[3, 2, 1, "", "encode_images"], [3, 2, 1, "", "forward"], [3, 2, 1, "", "generate"], [3, 2, 1, "", "init"], [3, 2, 1, "", "prepare_inputs_for_generation"], [3, 2, 1, "", "prepare_inputs_labels_for_multimodal"]], "Model.VisionTower": [[3, 2, 1, "", "forward"], [3, 2, 1, "", "init"], [3, 2, 1, "", "load_model"]], "Training": [[6, 1, 1, "", "BaseTrainingRecipe"], [6, 1, 1, "", "LLaVATrainer"], [6, 1, 1, "", "LengthGroupedSampler"], [6, 3, 1, "", "get_length_grouped_indices"], [6, 3, 1, "", "get_modality_length_grouped_indices"], [6, 3, 1, "", "split_to_even_chunks"]], "Training.BaseTrainingRecipe": [[6, 2, 1, "", "call"], [6, 2, 1, "", "load"], [6, 2, 1, "", "save"]]}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "terms": {"": [4, 5], "0": 1, "000000": 4, "000050": 4, "1": [1, 5], "10": 2, "128": 5, "1_val": 1, "1e": 5, "2": [1, 5], "256": 5, "2e": 5, "3": [1, 2, 5], "4": 1, "5": [1, 5], "558k": 4, "6": 1, "660": 2, "7": 1, "8": 1, "9k_imag": 4, "A": 1, "As": 4, "For": [1, 4], "If": 4, "In": [4, 5, 7], "It": 1, "Or": 1, "The": [0, 4, 7], "To": 0, "about": [], "abov": 5, "academ": 4, "accord": [0, 3, 6], "activ": 2, "addit": [2, 7], "adjust": [0, 5], "afford": 7, "after": 3, "all": [4, 5], "all_imag": 1, "allow": 7, "alreadi": 4, "alwai": 5, "an": [5, 6, 7], "annot": [1, 4], "anns_for_ev": 1, "answer": [0, 1, 3], "answer_dict_v": 1, "answers_upload": 1, "ap9k_lcs3k_sam9k_div2k": 4, "ar": 5, "argument": [0, 6], "artwork": 1, "aspect": 0, "assist": 7, "attent": 3, "attention_mask": [0, 3], "attn": 2, "bard_set": 1, "base": [0, 3, 6], "basetrainingrecip": [6, 8], "bash": [1, 5], "batch": [0, 5, 6], "batch_siz": 6, "below": 5, "benchmark": 1, "between": 0, "bit": 6, "blip_laion_cc_sbu_558k": 4, "bool": [3, 6], "both": 6, "buaa": [], "build": 2, "cach": 3, "calcul": 1, "call": [0, 3, 6, 8], "can": [1, 4], "captioner_coco_lcs_sam_1246k_1107": 4, "case": 2, "causallmoutputwithpast": 3, "cc": 4, "cd": [1, 2], "celebr": [1, 4], "cfg": 3, "challenge_all_quest": 1, "challenge_balanced_quest": 1, "chang": 1, "chat": 5, "choos": 5, "chunk": 6, "class": [0, 3, 6], "clone": 2, "coco": [1, 4], "coco2017_challeng": 4, "coco_pope_adversari": 1, "coco_pope_popular": 1, "coco_pope_random": 1, "code": 7, "code_reason": 1, "collat": 0, "collect": 4, "color": 1, "com": [2, 7], "command": 1, "commonsense_reason": 1, "compon": 7, "comput": 7, "conda": 2, "config": [3, 6], "configur": 3, "connector": [3, 6, 8], "connector_nam": 3, "connectorfactori": [3, 8], "contain": [0, 1, 3, 6], "conv": 1, "conv_vers": 5, "convers": 0, "convert_answ": 1, "convert_answer_to_mm": 1, "correspond": 6, "count": 1, "creat": [2, 3], "cuda_visible_devic": 1, "curat": 4, "current": 1, "custom": [1, 7], "cut": 7, "data": [3, 5, 6, 7, 8], "data_arg": 0, "data_col": 0, "data_path": 0, "datacollatorforsuperviseddataset": [0, 8], "dataset": [0, 1, 6, 7], "dcit": 0, "design": 7, "detail": 4, "determin": [3, 6], "dev2015": 1, "dict": [0, 3, 6], "differ": [0, 4, 5], "dlcv": [], "doe": 1, "download": [1, 4], "download_imag": 1, "download_script": 4, "e": 2, "each": [6, 7], "edg": 7, "effect": 7, "effort": 7, "embed": 3, "empir": 7, "en": 7, "enabl": 2, "encod": 0, "encode_imag": [3, 8], "engin": 7, "entir": [6, 7], "equal": 6, "eval": [0, 1], "eval_dir": 1, "eval_tool": 1, "evalu": [4, 7], "evaluation_script": 1, "exampl": [0, 5], "except": 5, "exist": 1, "experi": 7, "explor": 7, "extens": 7, "extract": [1, 3], "factori": 7, "featur": [3, 6, 7], "file": [1, 4], "fine": 0, "finetun": [5, 7], "first": 1, "flash": 2, "focu": 7, "folder": [1, 2], "follow": [1, 2, 4, 7], "form": 3, "format": 0, "forward": [3, 8], "from": [1, 3, 4], "function": 0, "gemma": 5, "gener": [3, 6, 8], "get": [0, 3], "get_length_grouped_indic": [6, 8], "get_modality_length_grouped_indic": [6, 8], "git": 2, "github": [2, 7], "global": 5, "goal": 7, "gpt": 0, "gpu": [1, 5], "gqa": 4, "gqa_imag": 4, "gqa_project_pag": 4, "gradient_accumulation_step": 5, "group": 6, "group_by_mod": 6, "here": [1, 5], "hidden": 3, "http": [2, 7], "human": 0, "hyperparamet": 5, "i": [4, 5, 7], "id": [3, 5], "imag": [0, 1, 3, 4], "image_processor": 0, "image_s": 3, "imagepreprocess": [0, 8], "img_path": 1, "implement": 7, "import": 5, "includ": [1, 6], "index": 6, "indic": 6, "infer": 1, "inherit": 3, "init": [0, 3, 8], "initi": [0, 3], "input": [0, 3], "input_id": [0, 3], "inputs_emb": 3, "instal": 7, "instanc": 0, "instruct": [1, 4], "int": 6, "integr": 7, "interchang": 7, "introduct": [], "io": 7, "isol": 2, "iter": 6, "jpg": 4, "json": [1, 4], "jsonl": 1, "just": [1, 4], "keep": [5, 6], "kei": 3, "label": [0, 3], "laion": 4, "landmark": [1, 4], "landscap": 7, "languag": 6, "language_model": 3, "larg": [6, 7], "latest": 7, "lavin": 1, "lazysuperviseddataset": [0, 8], "learn": 5, "leav": 7, "length": 6, "lengthgroupedsampl": [6, 8], "less": 7, "let": 7, "list": [0, 3, 6], "llama": 5, "llava": 1, "llava_dataset": 4, "llava_factori": [], "llava_gqa_testdev_balanc": 1, "llava_mm": 1, "llava_pope_test": 1, "llava_pretrain": 4, "llava_test_cqm": 1, "llava_textvqa_val_v051_ocr": 1, "llava_v1_5_mix665k": 4, "llava_vqav2_mscoco_test": 1, "llava_vqav2_mscoco_test2015": 1, "llavatrain": [6, 8], "llm": [3, 5, 6], "llmfactori": [3, 8], "lmm": [5, 7], "load": [0, 3, 6, 8], "load_model": [3, 8], "localhost": 5, "lora": 5, "main_eval_onli": 1, "make": 0, "make_supervised_data_modul": [0, 8], "mask": 3, "meanwhil": 7, "messag": 0, "meta": 4, "method": 7, "mkdir": 1, "mme_benchmark_release_vers": 1, "mmmu": [], "mmvet": 1, "mmvet_evaluation_serv": 1, "modal": 6, "mode": [0, 1], "model": [0, 5, 6, 7, 8], "model_arg": 6, "model_nam": 1, "model_name_or_path": 3, "model_path": 1, "modul": [7, 8], "modular": 7, "more": 7, "multi": 1, "multimod": [3, 6, 7], "must": 1, "n": 2, "name": 3, "navig": 2, "new": 7, "new_input_emb": 3, "new_label": 3, "next": 3, "now": 4, "num": [5, 6], "num_chunk": 6, "number": 6, "numerical_calcul": 1, "object": [0, 3, 6], "ocr": [1, 4], "ocr_vqa": 4, "offici": 1, "onli": 4, "open": 7, "openelm": 5, "optim": 6, "our": [4, 7], "output": 3, "output_attent": 3, "output_dir": 5, "output_hidden_st": 3, "over": 6, "own": 7, "packag": 2, "pair": 3, "paper": 4, "paramet": [0, 3, 6], "part1": 4, "part2": 4, "past_key_valu": 3, "patch": 0, "path": [0, 1, 3, 4, 5], "pattern": 7, "pep": 2, "per_device_train_batch_s": 5, "phi": 5, "philosophi": 7, "pid_split": 1, "pil": 0, "pip": 2, "playground": [], "pleas": [1, 4], "popular": 7, "posit": [1, 3], "position_id": 3, "poster": 1, "practition": 7, "predict": 1, "prepar": [3, 7], "prepare_inputs_for_gener": [3, 8], "prepare_inputs_labels_for_multimod": [3, 8], "preprocess": 0, "preprocessor": 0, "present": 7, "pretrain": [3, 4, 5, 6, 7], "pretrained_model_path": 5, "pretrainedtoken": [0, 6], "previou": 3, "probabl": 3, "problem": 1, "process": [0, 3], "processor": 0, "prompt": 0, "provid": [1, 5, 7], "put": 1, "py": 1, "python": [1, 2], "question": 0, "quickli": 4, "qwen": 5, "random": 6, "rate": 5, "ratio": 0, "readthedoc": 7, "recip": 7, "recommand": 5, "recommend": 2, "regist": 3, "register_connector": [3, 8], "register_llm": [3, 8], "register_vision_tow": [3, 8], "replac": 5, "repo": 1, "report": 4, "repositori": [2, 7], "reproduc": 7, "requir": [0, 2, 6], "research": 7, "resolut": 0, "resourc": 7, "result": [1, 7], "return": [0, 3, 6], "return_dict": 3, "room": 7, "roughli": 6, "sam": 4, "sam_imag": 4, "same": [3, 5, 6], "sampl": [1, 6], "sampler": 6, "save": [4, 6, 8], "sbu": 4, "scale": 7, "scene": 1, "script": [1, 5], "section": 4, "see": 4, "set": 6, "setup": 6, "sever": 6, "sft": 4, "sh": [1, 5], "share": 4, "share_textvqa": 4, "sharegpt4v_dataset": 4, "sharegpt4v_mix665k_cap23k_coco": 4, "sharegpt4v_project": 4, "simplic": 7, "singl": 1, "size": [3, 5, 6], "small": 7, "softwar": 7, "some": 6, "sourc": 7, "split": 6, "split_to_even_chunk": [6, 8], "sqa": 1, "stablelm": 5, "stage": 5, "state": 3, "step": 3, "str": [0, 3], "submission_all_quest": 1, "submit": 1, "subset": 4, "suit": 7, "supervis": 0, "support": [1, 2], "system": 7, "tar": 4, "templat": [0, 5, 8], "tensor": [0, 3], "test": 1, "test2015": 1, "test_all_quest": 1, "test_balanced_quest": 1, "testdev_all_quest": 1, "testdev_balanced_predict": 1, "testdev_balanced_quest": 1, "text": [0, 3], "text_fil": 4, "text_transl": 1, "textpreprocess": [0, 8], "textvqa": 4, "textvqa_0": 1, "textvqa_project_pag": 4, "them": [0, 1], "thi": [0, 2, 4], "time": 3, "tiny_llava": [], "tinyllama": 5, "tinyllava": [2, 3, 7], "tinyllava_factori": [1, 2], "tinyllava_factorysh": 1, "tinyllavabench": [], "tinyllavaconfig": 3, "tinyllavaforconditionalgener": [3, 8], "tinyllavapretrainedmodel": [3, 8], "tip": 5, "togeth": 6, "token": [0, 3, 6], "train": [0, 2, 4, 7, 8], "train2017": 4, "train_all_quest": 1, "train_all_questions_0": 1, "train_all_questions_9": 1, "train_balanced_quest": 1, "train_dataset": 0, "train_imag": [1, 4], "train_phi": 5, "trainer": 6, "training_argu": 6, "trainval_imag": 4, "transform": [0, 6], "tune": [0, 5], "tupl": 3, "two": 4, "type": [0, 3, 6], "under": 1, "upgrad": 2, "us": [1, 3, 4, 5], "usag": 4, "use_cach": 3, "user": 7, "util": 1, "v1": 1, "val2014": 1, "val_all_quest": 1, "val_balanced_quest": 1, "valid": 7, "valu": 3, "version": 0, "vg": 4, "vg_100k": 4, "vg_100k_2": 4, "vision_tower_nam": 3, "visiontow": [3, 6, 8], "visiontowerfactori": [3, 8], "visualgenom": 4, "visualgenome_project_pag": 4, "vocabulari": 3, "vqa": 4, "vqa_project_pag": 4, "vqav2_evaluation_serv": 1, "wai": 6, "want": 4, "we": [1, 2, 4, 5, 7], "web": 4, "webdata": 4, "weight": 3, "whether": [3, 6], "while": 6, "wide": 7, "wikiart": 4, "world_siz": 6, "x": 3, "y": 2, "you": [1, 4, 5], "your": [1, 4, 5], "your_result": 1, "zip": [1, 4]}, "titles": ["Data module", "Evaluation", "Installation", "Model module", "Prepare Datasets", "Train", "Training module", "Welcome to TinyLLaVA_Factory\u2019s Documentation!", "src"], "titleterms": {"": 7, "content": 7, "data": [0, 1, 4], "dataset": 4, "document": 7, "evalu": 1, "get": 7, "gqa": 1, "instal": 2, "llava": 4, "mm": 1, "mme": 1, "mmmu": 1, "model": 3, "modul": [0, 3, 6], "organ": [1, 4], "pope": 1, "prepar": 4, "scienceqa": 1, "sharegpt4v": 4, "src": 8, "start": 7, "textvqa": 1, "tinyllava_factori": 7, "train": [5, 6], "vet": 1, "vqav2": 1, "welcom": 7}})
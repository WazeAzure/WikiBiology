import React from 'react';

export const SubChapterData = [
  {
    checkpoint: "introduction",
    val:[{
        type: "h1",
        val: ["Cel Respiration"]
      },
      {
        type: "h2",
        val: ["Understanding"]
      },
      {
        type: "ul",
        val: ["Cell respiration involves the oxidation and reduction of compounds.", "Phosphorylation of molecules makes them less stable.", "In glycolysis, glucose is converted to pyruvate.", "Glycolysis gives a small net gain of ATP without the use of oxygen.", "In aerobic cell respiration pyruvate is decarboxylated and oxidized.", "In the link reaction pyruvate is converted into acetyl coenzyme A.", "In the Krebs cycle, the oxidation of acetyl groups is coupled to the reduction of hydrogen carriers, liberating carbon dioxide.", "Energy released by oxidation reactions is carried to the cristae of the inner mitochondrial membrane by reduced NAD and FAD.", "Transfer of electrons between carriers in the electron transport chain is coupled to proton pumping.", "In chemiosmosis protons is use through ATP synthase to generate ATP.", "Oxygen is needed to bind with the free protons to form water to maintain the hydrogen gradient.", "The structure of the mitochondrion is adapted to the function it performs."]
      },
      {
        type: "h2",
        val: ["Applications"]
      },
      {
        type: "ul",
        val: ["Electron tomography used to produce images of active mitochondria"]
      },
      {
        type: "h2",
        val: ["Skills"]
      },
      {
        type: "ul",
        val: ["Annotation of a diagram to indicate the adaptations of a mitochondrion to its function.", "Analysis of result from experiment involving measurement of respiration rates in germinating seeds or invertebrates using respirometer."]
      },
      {
        type: "h2",
        val: ["Nature of Science"]
      },
      {
        type: "ul",
        val: ["Assessing the ethics of scientific research: the use of invertebrates in respirometer experiment has ethical implications.","Paradigm shifts: the chemiosmotic theory led to a paradigm shift in the field of bioenergetics."]
      },
      {
        type: "h2",
        val: [""]
      },
      {
        type: "p",
        val: [""]
      },]
  },
  {
    checkpoint: "catabolism",
    val: [
      {
        type: "h1",
        val: ["Catabolism"]
      },
      {
        type: "p",
        val: ["Catabolism is the breakdown of complex (organic) compounds into simpler (inorganic) compounds. In catabolism, energy can be produced from the release of bonds in chemical compounds. However the energy produced cannot be directly used by cells, it must be converted into the form of Adenosine Triphosphate (ATP) compounds which contain high energy. The main purpose of catabolic reactions is to liberate energy contained in the source compound, namely Adenosine Triphosphate (ATP). The reaction that breaks down compound to get energy in catabolism is generally known as the process of respiration."]
      }
    ]
  },
  {
    checkpoint: "oxidation-and-reduction",
    val: [
      {
        type: "h1",
        val: ["Oxidation and Reduction"]
      },
      {
        tyoe: "h2",
        val: ["Sub 1"]
      },
      {
        type: "p",
        val: ["Oxidation and reduction are two chemical reactions that always take place at the same time. This occurs because electrons are transferred from one substance to another. The loss of electrons from a substance is oxidation, while the gain of electrons is reduction. The Benedict's test, a test for certain forms of sugar, is a good example to help visualize this in the lab. Copper sulphate solution containing copper ions with a charge of two positive (Cu2+) is used in the test. Cu2+ often gives solutions a blue or green color. By giving electrons to these copper ions, they are reduced and create copper atoms. Copper atoms are insoluble and precipitate in a red or orange color.  The electrons come from sugar molecules, which are therefore oxidized.", "Electron carriers are substances that have the ability to accept and release electrons as needed. They frequently make connections between oxidations and reductions in cells. NAD (nicotinamide adenine dinucleotide).  is the most important electron carrier in respiration NADP (nicotinamide adenine dinucleotide phosphate)., a phosphorylated form of NAD, is employed in photosynthesis Fig 3. depicts the structure of the NAD molecule."]
      },
      {
        type: "img",
        val: [{
          src: require("./lmao.png"),
          sub: "Fig 3. Picture of NAD"
        }],
      }
    ]
  },
  {
    checkpoint: "glycolysis",
    val: [
      {
        type: "h1",
        val: ["Glycolysis"]
      },
      {
        type: "h2",
        val: ["Preparatory Phase"]
      },
      {
        type: "p",
        val: ["The first phase (energy release) takes place in the cytoplasm (under anaerobic conditions) which begins with the reaction of the breakdown of glucose molecules into glucose-6-phosphate which requires energy from ATP and releases 1 P. If glucose-6-phosphate gets additional 1 P to fructose-6-phosphate then becomes fructose 1,6 phosphate which requires energy from ATP which releases 1 P. So to convert glucose into fructose 1,6 phosphate, energy is needed as much as 2 ATP. Furthermore, fructose 1,6 phosphate enters the mitochondria and undergoes lysis (breaks) into dehydroxy acetone phosphate and phosphoglyceraldehyde"]
      },
      {
        type: "img",
        val: [{
          src: require("./glycolysis.png"),
          sub: "Fig 4. Preparatory Phase of Glycolysis"
        }]
      },
      {
        type: "h2",
        val: ["Payoff phase"]
      },
      {
        type: "p",
        val: ["The phosphoglyceraldehyde molecule undergoes a phosphorylation reaction (addition of a phosphate group) and at the same time, a dehydrogenation reaction (removal of H atoms) also occurs which is captured by hydrogen acceptors, namely coenzymes. NAD. With the release of 2 H atoms, phosphoglyceraldehyde is converted to 1,3-diphosphoglyceral acid and then converted to 2 3-phosphoglyceral acid which produces 2 ATP energy. Furthermore, the 2 3-phosphoglyceral acid is converted into 2 pyruvic acid by producing 2 ATP energy and H2O (as a waste product)."]
      },
      {
        type: "img",
        val: [{
          src: require("./payoff-phase.png"),
          sub: "Fig 5. Payoff phase of glycolisis"
        }]
      },
      {
        type: "vid",
        val: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BO0zL03CtDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    ]
  },
  {
    checkpoint: "krebs-cycle",
    val: [
      {
        type: "h1",
        val: ["Krebs Cycle"]
      },
      {
        type: "p",
        val: ["Acetyl Co-A is entered in Krebs cycle or the citric acid cycle. Why is this second stage called the Krebs cycle? The Krebs cycle is named after its discovery by Sir Hans Krebs (1980-1981), a German biochemist who suggested that glucose is slowly broken down in the mitochondria of cells in a cycle called the Krebs cycle.", "Acetyl coenzyme A enters the Krebs cycle through a hydrolysis reaction by releasing coenzyme A and an acetyl group (containing 2 C atoms), then combines with oxaloacetic acid (4 C atoms) to form citric acid (6 C atoms). The energy used for the formation of citric acid comes from the binding of acetyl coenzyme A. Furthermore, citric acid (C6) gradually becomes oxaloacetic acid (C4) again which will then combine with acetyl Co-A. The release of the C atom is followed by the release of high energy in the form of ATP which can be directly used by cells. During the reaction oxygen is taken from the water to be used to oxidize two C atoms to CO2, the process is called oxidative decarboxylation. In each oxidation 1 molecule of acetyl coenzyme A will be released 1 molecule of ATP, 8 H atoms, and 2 molecules of CO2."]
      },
      {
        type: "img",
        val: [{
          src: require("./krebs.png"),
          sub: "Fig 6.. Summary of the Krebs Cycle"
        }]
      },
      {
        type: "p",
        val:["The released H atoms are then captured by Nicotinamide Adenine Dinucleotide (NAD) and Flavin Adenine Dinucleotide (FAD) to be carried to the transport system where they react with oxygen to produce water. The Krebs cycle can be seen in Figure 6. acetyl CoA releases its 2 C atoms which are captured by oxaloacetate to become citric acid. Due to the addition and release of H2O, citric acid is then converted to isocitric acid. The isocitric acid then releases a carboxyl group (CO2) to form Ketoglutamic acid which is accompanied by the release of hydrogen and electrons captured by NAD to form NADH. Furthermore, Ketoglutamic acid also releases a carboxylic group (CO2) accompanied by the release of hydrogen and electrons captured by NAD to form NADH. Ketoglutamic acid then binds to the Co-A molecule to form succinate Co-A. CoA is then released and replaced by phosphate (P) derived from GTP, bound to ADP to form ATP, causing succinyl Co-A to convert to succinic acid. Succinic acid releases 2 hydrogens (2H) and electrons are captured by FAD to form FADH2, succinic acid turns into fumaric acid. Then fumaric acid can use water (H2O) to become malic acid, then malic acid releases hydrogen and electrons are captured by NAD+ to form NADH. And finally malic acid turns into oxaloacetic acid. Axaloacetic acid which gets a transfer of 2 carbon atoms (2C) from acetyl Co-A will return to the Krebs cycle.","At the end of the Krebs cycle, oxaloacetic acid is formed again which binds to another molecule of acetyl coenzyme A and the Krebs cycle resumes, because during the oxidation reaction of the glucose molecule only 2 molecules of acetyl coenzyme A are produced, so the Krebs cycle must take place twice . So the net result of the oxidation of 1 glucose molecule will produce 2 ATP and 4 CO2 and 8 pairs of H atoms which will enter the electron transport chain."]
      },
      {
        type: "vid",
        val: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2TESEpeysbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    ]
  },
  {
    checkpoint: "electron-transport",
    val: [
      {
        type: "h1",
        val: ["Electron Transport"]
      },
      {
        type: "p",
        val: ["Before entering the electron transport chain in the mitochondria, 8 pairs of H atoms released during the Krebs cycle will be captured by NAD and FAD to become NADH and FADH. When entering the electron transport chain, the molecule undergoes a series of oxidation-reduction (Redox) reactions that occur in a chain involving several intermediate substances to produce ATP and H2O. Some intermediate substances in redox reactions, including flavoproteins, coenzymes A and Q and cytochromes, namely cytochromes a, a3, b, c, and c1. All of these intermediates function as hydrogen carriers/electron carriers.", "What is the result of an electron transport chain reaction? If you look carefully at the picture of the electron transport chain reaction (Fig.7), for 1 molecule of NADH2 that enters the electron transport chain, 3 molecules of ATP can be produced, while from 1 molecule of FADH2, 2 molecules of ATP can be produced. Thus, during the oxidation reaction from 1 glucose molecule can produce 38 ATP, consisting of 2 ATP from glycolysis, 2 ATP from oxidative decarboxylation and 6 ATP from the Krebs cycle (derived from 10 NADH2) and 4 ATP from the Krebs cycle (derived from FADH2)."]
      },
      {
        type: "img",
        val: [{
          src: require("./electron-transport.png"),
          sub: "Fig 7. Electron transport chain and oxydative phosporilation"
        }]
      },
      {
        type: "vid",
        val: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LQmTKxI4Wn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    ]
  },
  {
    checkpoint: "tok",
    val: [
      {
        type: "h1",
        val: ["Theory of Knowledge"]
      },
      {
        type: "p",
        val: ["Peter Mitchell’s chemiosmotic theory encountered years of opposition before it was finally accepted. For what reasons does falsification not always result in an immediate acceptance of new theories or a paradigm shift?"]
      }
    ]
  },
  {
    checkpoint: "assessment",
    val: [
      {
        type: "h1",
        val: ["Data-based question: Oxygen consumption by mitochondria"]
      },
      {
        type: "p",
        val: ["Figure 8. shows the results of an experiment in which mitochondria were extracted from liver cells and were kept in a fluid medium, in which oxygen levels were monitored. Pyruvate was added at point I on the graph, and ADP was added at points II, III and IV."]
      },
      {
        type: "ul",
        val: ["1.	Explain why oxygen consumption by the mitochondria could not begin unless pyruvate had been added.", "2.	Deduce what prevented oxygen consumption between points I and II.", "3.	Predict, with reasons, what would have happened if ADP had not been added at point III.", "4.	Discuss the possible reasons for oxygen consumption not being resumed after ADP was added at point IV."]
      },
      {
        type: "img",
        val: [{
          src: require("./ass1.png"),
          sub: "Fig 8. Results of oxygen consumption experiment"
        }]
      },
      {
        type: "h1",
        val: ["Annotating a diagram of mitochondrion Annotation of a diagram to indicate the adatations of a mitochondrion to its function."]
      },
      {
        type: "img",
        val: [{
          src: require("./ass2.png"),
          sub: "Fig 9. Electron micrographs of mitochondria: (a) from a bean plant (b) from mouse liver (c) from axolotl sperm (d) from bat pancreas"
        }]
      },
      {
        type: "text",
        val: ["Study the electron micrographs in Figure 8 and then answer the multiple-choice questions."]
      },
      {
        type: "quiz",
        val: [
          {
            type: "pg",
            question: "1.	The fluid-filled centre of the mitochondrion is called the matrix. What separates the matrix from the cytoplasm around the mitochondrion?",
            val: ["One Wall", "One Membrane", "Two membranes", "One wall and one membrane"]
          },
          {
            type: "yrn",
            question: "2. The mitochondrion matrix contains 70S ribosomes, whereas the cytoplasm of eukaryotic cells contains 80S ribosomes. Which of these hypotheses is consistent with this observation?",
            statement: ["Protein is synthesized in the mitochondrion.", "Ribosomes in mitochondria have evolved from ribosomes in bacteria.", "Ribosomes are produced by aerobic cell respiration."],
            val: ["(i) only", "(ii) only", "(i) and (ii)", "(i), (ii), and (iii)"]
          }
        ]
      }
    ]
  }
]

import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            {/* <h1>TEST UPDATE {Date.now()}</h1> */}

            <h1 className="text-4xl font-bold">About Me</h1>
            <Button 
              variant="outline" 
              asChild 
              className="ml-4"
            >
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <AspectRatio ratio={1} className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={`https://www.umass.edu/honors/sites/g/files/ijdqth221/files/2024-09/Mimi.png`} 
                  alt="Mimi Lertsaroj" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed mb-6">
                    Hi, I'm Mimi (Pichsinee Lertsaroj)! I've just graduated from UMass Amherst as a Computer Science major with minors in Psychology and Maths.
                    I'm currently an AI and Data Science intern at BPPUS and researcher at BINDS who specialises in foundational artificial intelligence and deep learning. 
                    I'm passionate about interpretable
                    biologically-inspired/biologically-plausible foundational machine learning models and developing brain-inspired 
                    intelligent systems for robotics. I love solving complex problems and pushing the boundaries of what we can achieve with AI.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I have research experience in many different concentrations of AI/ML, including developing foundational artificial neural networks
                    for memory modelling, deep reinforcement learning for vision-based robotics control systems, and multi-objective optimisation for decision-making problems. Though my technical field of interest
                    is in theoretical computational neuroscience, I pretty much work on whatever I find interesting. I'm also doing some cool stuff
                    with RNN's and spiking neural networks on the side. If you want to learn more about my research please feel free to visit my research page!
                  </p>
                  <p className="text-lg leading-relaxed">
                    Outside of computers, I love fashion, art, and any colourful shape-related games (tetris, set, minecraft, etc). 
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Machine Learning</li>
                  <li>Research</li>
                  <li>Software Engineering</li>
                  <li>Web Development</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Research Interests</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Theoretical Computational Neuroscience</li>
                  <li>Robotics</li>
                  <li>Computer Vision</li>
                  <li>Foundational Machine Learning Model</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Artificial Intelligence + Data Science Intern</h3>
                <p className="text-muted-foreground mb-2">Biologically Inspired Neural and Dynamical Systems (BINDS) Lab • 2025 - Present</p>
                <p>Developing multi-agent RAG system for an LLM power analyst assistant who can perform complex analysis, summarisation, data retrieval, and visualisation on the local energy market.</p>
              </CardContent>
            </Card>
            <Card></Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Research Assistant</h3>
                <p className="text-muted-foreground mb-2">Biologically Inspired Neural and Dynamical Systems (BINDS) Lab • 2023 - Present</p>
                <p>Developing interpretable dynamic exponential cognitive memory models with biological plausible Hopfield Network designs (now published at NeurIPS 2025 :D).</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Research Assistant</h3>
                <p className="text-muted-foreground mb-2">UMass Computer Vision Lab + DARoS Lab • 2024 - 2025</p>
                <p>Studying learned vision-based control strategies for balance and complex terrain navigation of robots.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Research Assistant</h3>
                <p className="text-muted-foreground mb-2">Sustainability, Optimization, Learning, and Algorithms Research Lab • 2024 - 2025</p>
                <p>Develop better solar panel placement strategies in the US using complex multi-objective decision-making algorithms (published at ACM BuildSys 2025).</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Software Engineer Intern</h3>
                <p className="text-muted-foreground mb-2"> Spacely AI• 2024</p>
                <p>Created an object recognition system with YOLOv9 for furniture detection in floor plans.</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science, Minors in Psychology and Mathematics</h3>
              <p className="text-muted-foreground mb-2">University of Massachusetts Amherst • 2025</p>
              <p>Member of the Commonwealth Honors College</p>
              <p>Dean's List for F2021, S2022, F2022, F2023, S2024, F2024, S2025</p>
              <p>Chancellor's Award Recipient, Commonwealth Honors College Honors Thesis Grant Recipient</p>
              <p>President of the UMass Art Club</p>
              <p>Commonwealth Honors College Peer Ambassador and Social Media Coordinator</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}

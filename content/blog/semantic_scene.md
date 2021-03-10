+++
title = "Semantic Scene Understanding in Robotics"
description = "An article on why semantic scene understanding could be the next big thing in autonomous robotics, where we are now, and what comes next"
author = "Rishikesh Vanarse"
date = "2021-03-09"
categories = ["innovation","ai","computer vision"]
[[images]]
    src = "/blog/img/semantic_scene/title.png"
    stretch = "vertical"
+++

<!---
NOTES TO MEDIA TEAM:
* Add author social media links [Also website now :)  https://rmvanarse.github.io ]
-->

I accidentally dropped my keys this morning. They fell and slid down right under the bed. I got down, making sure not to knock anything over, and tried to reach them, but they seemed out of reach. I instinctively looked around to see if I could use anything to reach the keys, and saw an unused guitar-stand nearby. It took me 4-5 seconds to dismantle the stand, and use its rod to retrieve my keys. This whole 'side-quest' barely cost me 25 seconds.

Being a human being, retrieving a key from under a bed is a task that is too insignificant for us to ponder over. We overcome multiple such hinderances daily, without realizing their complexity. For today's robots (even the most advanced ones), this very task would be extremely complex. Why is that so?

Robotic arms and grippers of our age possess amazing dexterity and recent robots have overcome some of the hardest challenges in control. With advanced sensors, processors and algorithms, tasks such as localization & motion planning are more efficient than ever before. Developments in AI have made real-time object detection and tracking possible. Yet, tasks such as the one mentioned above still seem near-impossible due to a simple unanswered question: How would a robot **figure out** what to do in such unplanned situations?

Despite employing  state-of-the-art neural networks, robots do not possess a **_true understanding_** of the **semantics** of their environment, i.e. the **_meaning_** of the things around them. Robots do not  know how every object in their surroundings can influence their goal. Complex robot use cases (eg: disaster management and search & rescue operations) that require robots to predict possible scenarios and anticipate consequences of their actions. But they are unable to correlate knowledge from different domains with what they perceive and therefore, cannot draw logical conclusions about what can/should be done. Thus, the large gap between perception and panning is that of **_reasoning_** or **_common sense_**.

## Semantic SLAM

One of the relatively more explored sub-fields of semantic scene understanding is **semantic [SLAM](https://in.mathworks.com/discovery/slam.html)** (Simultaneous Localization and Mapping). Most techniques in semantic SLAM simply augment a map with semantic information. In earlier works, keypoints extracted within object detection bounding boxes are used to introduce physical constraints during SLAM. Knowledge of recognized objects can be used to introduce **semantic priors** (eg: A tree should be vertically oriented, the trunk should always touch the ground). Many approaches also predict 3D structures that are not fully visible, by using known shapes of common objects. This helps the robot predict occluded structures and  free-spaces. Recent approaches go further by taking into account factors such as the movability, flexibility, allowed degrees of freedom and expected behaviour of known objects. Applications of these are commonly seen in self-driving cars. Here, objects like road signs, cars, signals, etc. are tracked, and known behaviours of vehicles, pedestrians, etc. are used for making predictions.

---
<!--Tesla & Desk-->
{{< figure src="/blog/img/semantic_scene/semantic_slam.png" caption="**Semantic SLAM** - How Tesla Autopilot sees the world (left) and augmenting SLAM with object information (right)">}}

Inclusion of  properties of _individual_ objects in SLAM is not sufficient. For a true semantic understanding, the robot must also understand how multiple entities interact with one another. This implies that the perceived data must be further augmented with _context_ and _reasoning_.

## Ontology and Logic

For robots to make sense of the inter-relations of objects, our knowledge of these objects needs to be arranged in some form of **conceptual hierarchy**. A common approach towards this is using **conceptual maps**. These maps are an abstraction of the environment in terms of a graph. In some approaches, nodes represent physical area-labels (room, corridor) and  their transition points (doors, gates). Other approaches further cluster objects based on which node they are associated with (eg: An oven is associated with a kitchen). Often, Machine Learning is used for this classification, i.e. associating places & objects to each other, through context. The maps are sometimes endowed with additional semantic constraints such as connectivity, movability, transition feasibility, etc.

Moving beyond simply _recognizing_ context, robots also need to know how to _use_ this context. An interesting way to tackle this is through the use of **description sections**. These are sections in the robot's memory that would contain rules for logical inference, Bayesian predictions, heuristics, etc. There also exist algorithms that convert [linear & temporal logic](https://en.wikipedia.org/wiki/Linear_temporal_logic) from these descriptive rules to controllers that can directly be used on robots.

Another effective way to introduce logical reasoning in robots is by storing knowledge in an **ontological structure**. This is a graph that provides the robot information about _what the objects are, what they can be used for_ and _how to use them_ (See the figure below). Thus, by taking into account the semantics of objects, the robot can  choose appropriate behaviour based on the current situation.

<!--Ontology cup, kettle-->
{{< figure src="/blog/img/semantic_scene/ontology.png" caption="**Ontological structures** - Cropped diagram of a robot figuring out how to find a cup of tea">}}

## Learning to Reason

Hardcoding logical rules still has its limitations. Human understanding is beyond a fixed set of pre-fed rules. Humans can _observe_ their surroundings and instantly _understand_ what is going on through  _common sense_. Humans can corelate past observations to gain a better understanding of the current situation.

One area where machines  are getting better at gaining such an understanding is not in robotics, but in artificial **[video/image captioning](https://towardsdatascience.com/image-captioning-in-deep-learning-9cd23fb4d8d2)** networks. The figure below shows an AI answering questions about an image. Such architectures generally consist of a CNN-based (Convolutional Neural Network) model for object recognition giving a feature vector. This feature vector is fed to an RNN (Recurrent Neural Network) that generates a sentence describing it. It would thus be a fair assumption that at an intermediate step of this process contains a significant level of semantic understanding, embedded in latent space.

The second area of learning through observation is **imitation learning**. There exists research in this area that tries to solve the **correspondence problem**; i.e.: Humans and robots perceive and interact with the world in fundamentally different ways, so robots must _learn_ the correspondence between the 'state spaces' of humans and robots. This consists of establishing **Perceptual equivalence** (_What does an observation mean in robot-terms & human-terms_) and **physical equivalence** _(How to achieve the same effect as the one observed)_.

<!--waiter pancakes-->
{{< figure src="/blog/img/semantic_scene/captioning.png">}}

## General Intelligence & Artificial Conscience

Despite all these advances, there is still a very long way to go. As we build systems with growing semantic understanding, we gradually approach towards **Artificial General Intelligence (AGI)**. AGI can be defined as the _ability of a machine to perform any task that a human can_. Contemporary state-of-the-art systems are still designed to perform well on very specific tasks, but not so much on anything else. An AGI on the other hand should be able to learn a broader range of tasks with far less training. An AGI would ideally be able to apply knowledge of one domain to another.

An **AGI singularity** is defined as the point in the future when Artificial Intelligence surpasses human level thinking. Based on current trends of advancement in the field, some experts believe that the singularity may arrive as early as the year 2060. As each development in robotics and AI brings us closer to this point, we are moving slowly from 'Autonomous Robots' to [**'Cognitive Robots'**](https://en.wikipedia.org/wiki/Cognitive_robotics) - robots that possess awareness, memory (episodic & procedural), ability to learn and the ability to anticipate. At such a point, AI may have the ability to figure out solutions to some of the worlds biggest and most complex challenges, and robots may be able to implement these solutions with far more ease and efficiency than humans. This would be a point when a simple task like figuring out how to retrieve keys from under a bed would truly be as insignificant for robots as it is for humans. But until then, there still remains much research to be done.

<br>
<br>

## References

1. R.Salas, N.Newcombe, H.Strasdat, P.Kelly, A.Davidson; SLAM++: Simultaneous localization and mapping at the level of Objects; _CVPR 2013_
1. I.Kostavelis, A.Gasteratos; Semantic Mapping for Mobile Robot Tasks - A survey; _Robotics & Autonomous Systems_ S66 (2015) pp86-103
1. [This is what a Tesla Autopilot sees on Road](https://www.carscoops.com/2020/01/this-is-what-teslas-autopilot-sees-on-the-road/) (Carscoop Article by S.Tudose)
1. R. Zellers, Y.Bisk, A.Farhadi, Y.Choi: From Recognition to Cognition - Visual Common Sense Reasoning; _CVPR 2019_
1. A. Pronobis, P. Jensfelt, Understanding the real world: Combining objects, appearance, geometry and topology for semantic mapping.
1. G.Lim; Ontology based unified robot knoowledge for Service Robots in Indoor Environment; _IEEE transactions on Systems, Man & Cybernetics_ Part A. Vol 41. No 3, May 2011
1. C. Galindo, A. Saffiotti, S. Coradeschi, P. Buschka, J.-A. Fernandez-Madrigal, J. González:  Multi-hierarchical semantic maps for mobile robotics, _International Conference on Intelligent Robots and Systems_, IEEE, 2005, pp. 2278–2283
1. O.M. Mozos, W. Burgard, Supervised learning of topological maps using se- mantic information extracted from range data; _International Conference on Intelligent Robots and Systems_, IEEE, 2006, pp. 2772–2777
1. B. Kuipers, Modeling spatial knowledge, Cogn. Sci. 2 (2) (1978) 129–153.
1. [Automatic Image Cationing using Deep Learning](https://medium.com/swlh/automatic-image-captioning-using-deep-learning-5e899c127387) (Medium Article)
1. J. Browniee, 2017 [How to Automatically Generate Textual Descriptions for a Photograph with DL](https://machinelearningmastery.com/how-to-caption-photos-with-deep-learning/)
1. S. Wadhwa, 2018 [Asking Questions to Images with Deep Learning](https://blog.floydhub.com/asking-questions-to-images-with-deep-learning/ ) (Floydhub Article)
1. M. Tenorth, L. Kunze, D. Jain, M. Beetz, Knowrob-map-knowledge-linked semantic object maps; _International Conference on Humanoid Robots_, IEEE, 2010, pp. 430–435
1. L.Nicholson, M.Milford, N.Sünderhauf; QuadricSLAM: Dual Quadrics from Object Detections as Landmarks in Object-oriented SLAM
1. [Robot Learning by Demonstration](http://www.scholarpedia.org/article/Robot_learning_by_demonstration) (Scholarpedia)
1. [How Far are we from achieving Artificial General Intelligence?](https://www.forbes.com/sites/cognitiveworld/2019/06/10/how-far-are-we-from-achieving-artificial-general-intelligence/?sh=578c9faa6dc4) (Forbes Article)
1. [995 experts opinion: AGI singularity by 2060](https://research.aimultiple.com/artificial-general-intelligence-singularity-timing/)
1. [Cognitive Robotcs](https://en.wikipedia.org/wiki/Cognitive_robotics) (Wikipedia)

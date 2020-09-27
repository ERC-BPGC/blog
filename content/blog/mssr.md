+++
title = "Modular Self Reconfigurable Robots"
description = "The article discusses the idea of Modular Self Reconfigurable Robots, and how they boost robots' utility in various sectors."
author = "Ashutosh Gupta"
date = "2020-09-27"
categories = ["automation","electronics","mechanical"]
[[images]]
    src = "img/mssr/pic1.jpg"
    stretch = "horizontal"
+++

Robots were invented with the goal of helping humans carry out their tasks more comfortably, particularly 4D (Dirty, Dangerous, Difficult, and Dull) tasks. In designing robots, the conventional approach has been to design their hardware and software in accordance with the tasks they are supposed to do. Conventional robots can perform specific tasks accurately, but they are not very versatile and adaptive, and thus applications that are consigned to them rely heavily on their physical structure and controller capabilities. As a workaround to flexibility and adaptability limitations of fixed-body robots, Modular Self Reconfigurable Robots were introduced.

![smores](/blog/img/mssr/pic2.png)

<center>(SMORES by GRASP Lab at Penn Engineering)</center>

Modular robotics provides a unique advantage over traditional robotic technologies in terms of reconfigurability, reusability, and ease in manufacturing. Many applications such as large-scale facility management, space exploration, military-zone monitoring, disaster management, and prosthetics for physically disabled  need adaptable and self-healing capabilities, and modular self reconfigurable robots are often seen as a feasible solution to the same. The major difference of modular system designs over conventional robots can be viewed as the ability to form various configurations as per the requirement of application with minimal human intervention.

A modular robot consists of several units with few degrees of freedom (DOFs) called modules which are usually equipped with connection mechanisms to cooperatively connect to or detach from each other in order to create complex structures and configurations with many DOFs. Modular robots are usually classified into chain-type, lattice-type or hybrid-type architectures depending on module arrangement.

![m-tran](/blog/img/mssr/pic3.png)

<center>(M-TRAN by AIST and Tokyo Tech)</center>

Chain-type architectures consist of modules that are connected together in a linear or tree topology. This structure can fold-up to become space filling, but the underlying architecture is serial. These modular robots  are able to autonomously change their configuration into a wheel, quadruped, snake, worm, and so on. Some examples of chain-type modular robots are Polybot, [iMOBOT](https://www.youtube.com/watch?v=6qxx7K17L_8), Transmote, Ubot, [CoSMO](https://www.youtube.com/watch?v=uhNEuXQK1iI) and many more.

Lattice-type robot has modules that are arranged in a regular three-dimensional (3D) pattern, such as a cubical or hexagonal grid. Lattice-type modular robots are inherently self-reconfigurable because reconfiguration is their only means of locomotion. [M-blocks](https://www.youtube.com/watch?v=hI5UDKaWJOo), Telecube, CHOBIE, [Atron](https://www.youtube.com/playlist?list=PL0801B819ED037AA0), Cross-ball are only some of the lattice-type robots.

Hybrid-type architectures have features of both lattice-type and chain-type architectures. Some modular robots can be classified as hybrid-type because they can be configured both as chain and as lattice structures. [M-TRAN](https://www.youtube.com/watch?v=4oSavAHf0dg&t=2s), [Superbot](https://www.youtube.com/watch?v=rfT0hbewv-4), [SMORES](https://www.youtube.com/watch?v=CfKErvU3we8), and [Roombots](https://www.youtube.com/watch?v=KY6QCDUngtk) are examples of hybrid-type modular robots.

![atron](/blog/img/mssr/pic4.png)

<center>(Atron by Adaptronics group)</center>

ERC, BITS Goa’s, Modbot project, focused on developing a new design for a modular robot that had sufficient degrees of freedom to be able to perform a large number of configurations. The project aimed at developing a lightweight, manufacturable network of modules able to overcome functional limitations faced by existing modular self reconfigurable robots. A single module was fabricated capable of complete teleoperation. A custom circuit on a prototyping board was manufactured to overcome difficulties in connections and properly interfacing the micro-controller with peripherals. The team also performed torque analysis for gears and linkages in a simulation environment. In Feb 2020, the team began the process of improvising the mechanical model in order to overcome the space constraints to fit in the IR modules (TCRT5000). The future prospects of the project includes migrating the whole project onto ROS and preparing a custom stack for the project.

![modbot](/blog/img/mssr/pic5.jpg)

<center>(Modbot by ERC, BITS Goa)</center>

A modular robot also contains a lot of electronics on a single module aside from all the mechanical structure discussed here. These range from actuation motors to sensors for perception of the environment and computer processors which can handle all remote computation. To be fully self reconfigurable these robots need to be autonomous and complete various tasks with minimal or no human interference. This requires precise control algorithms, motion and path planning and even the application of machine learning in some stages.

Therefore the concept of modular robotics has tremendous research potential and a lot more diverse applications. By showing us new ways robots can interact with the real world and adapt to different conditions, they are slowly evolving and changing our idea of robotics. This very well is just the beginning in the world of Modular Self Reconfigurable Robots.

<br>
<br>

## References:

1. Modular robotic systems: Methods and algorithms for abstraction, planning, control, and synchronization by Hossein Ahmadzadeh et.al. - https://www.sciencedirect.com/science/article/pii/S0004370215000260
2. Modular Self-Reconfigurable Robotic Systems: A Survey on Hardware Architectures by S. Sankhar Reddy Chennareddy et. al. - https://www.hindawi.com/journals/jr/2017/5013532/
3. Current trends in reconfigurable modular robots design by Alberto Brunete  et.al. - https://journals.sagepub.com/doi/full/10.1177/172988141771045
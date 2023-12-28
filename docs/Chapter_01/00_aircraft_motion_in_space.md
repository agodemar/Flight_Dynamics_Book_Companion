---
template: main.html
title: Aircraft motion in space
---

# Aircraft CG motion in the Earth frame $\mathcal{F}_\mathrm{E}$

Modeling the kinematics of a rigid aircraft in three-dimensional space involves describing the motion of the vehicle's center of gravity (CG) and its orientation as it moves through the air. Kinematics is the study of motion without considering the forces causing the motion. Here's an overview of how the kinematics of a rigid aircraft can be modeled in three-dimensional space.

## Coordinate Systems
Within the flat-Earth approximation, an Earth frame $\mathcal{F}_\mathrm{E}$ can be chosen as a coordinate system to represent the three-dimensional space. Moreover, a local body-fixed system $\mathcal{F}_\mathrm{B}$ attached to the aircraft is assumed to describe the aircraft motion as a rigid body.

## Aircraft attitude

### Euler angles

Aircraft orientation in space is typically modeled using an ordered triplet of angles: heading, elevation, and roll. Thesr are also known as Euler angles. 

- **Heading** $\psi$ is the angle between the aircraft's longitudinal axis (front to back) and the North, measured in the horizontal plane. It represents the aircraft's left or right direction.
- **Elevation** $\theta$ is the angle between the aircraft's longitudinal axis and the horizontal plane. It represents the aircraft's up or down direction.
- **Roll** $\phi$ is the rotation around the aircraft's longitudinal axis. It represents the aircraft's tilt to the left or right.

These angles are used to define the aircraft's orientation in a 3D space. They are crucial for navigation, control systems, and flight dynamics. 

In addition to Euler angles, there are other methods to represent orientation such as quaternions and direction cosine matrices. These methods can help to avoid certain issues like gimbal lock that can occur with Euler angles. 

It's important to note that the modeling of aircraft orientation is a complex topic that involves various aspects of physics, mathematics, and engineering.

### Quaternion-based orientation modelling

Quaternions are an alternative and compact way to represent rotations in three-dimensional space. A quaternion is a hypercomplex number of the form \(q=q_0 + q_x \boldsymbol{i} + q_y \boldsymbol{j} + q_z \boldsymbol{k}\), where $\boldsymbol{i}$, $\boldsymbol{j}$, and $\boldsymbol{k}$ are imaginary units. The quaternion is typically normalized to have a unit magnitude.

Quaternions have certain advantages over Euler angles, such as avoiding gimbal lock and providing smooth interpolation between orientations.
Both Euler angles and quaternions are widely used in aerospace engineering and computer graphics for representing the orientation of rigid bodies, including aircraft, in three-dimensional space. The choice between them depends on the specific requirements of the application.
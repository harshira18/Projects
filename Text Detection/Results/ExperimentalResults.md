*Evaluation Metrics:*

The most widely utilised protocols for conducting quantitative comparisons of text detection methods are the ICDAR standard evaluation metrics. To evaluate a text detector's performance, its precision and recall measures are examined. 

The F-measure is the harmonic-mean of the precision and recall metrics which can be calculated as:

![image](https://github.com/user-attachments/assets/cb555ba0-de7d-48dc-b949-bfc4a848efcb)

Where P stands for precision for a test sample and R is the recall.

The intersection over union (IoU) metric of ICDAR-2015 is used to calculate the precision and recall, and it is obtained for the i<sup>th</sup> detection bounding-box (D<sub>j</sub>) and j<sup>th</sup> ground-truth (G<sub>j</sub>) as follows:

![image](https://github.com/user-attachments/assets/14c16bd3-042f-4339-8f6d-8c90ede9fad0)

and a threshold of IoU ≥ 0.5 is used to determine whether a detection was accurate.

<hr>

*Quantitative Results:*

The given table provides an overview of the experimental findings and the figure provides a graphical representation of the performance of the three text detectors on the respective datasets. We observe that TextFuseNet, being the latest of the models outperforms EAST and CRAFT in detecting both multi-oriented as well as horizontal text.

![image](https://github.com/user-attachments/assets/254a91f5-e673-4838-ac53-4f70594a968f)

![image](https://github.com/user-attachments/assets/f47f1e88-3f9d-4827-a186-96c7d84c8f09)


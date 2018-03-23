Linear regression is a supervised machine learning technique which works well when the target column we're trying to predict, the dependent variable, is ordered and continuous.
If the target column instead contains discrete values, then linear regression isn't a good fit.

Predictive model for these types of problems, which are known as classification problems can be done using logistic regression.
In classification, our target column has a finite set of possible values which represent different categories a row can belong to.
We use integers to represent the different categories so we can continue to use mathematical functions to describe how the independent variables map to the dependent variable.

Here are a few examples of classification problems:

Problem	Sample Features|	Type|	Categories|	Numerical Categories
-----------------------| -----|-----------|---------------------
Should we accept this student based on their graduate school application?	|College GPA, SAT Score, Quality of Recommendations	Binary |	Don't Accept, Accept|0, 1
What is the most likely blood type of 2 parent's offspring?	|Parent 1's blood type, Parent 2's blood type|	Multi-class	A, B, AB, O	| 1, 2, 3, 4


Starting with binary classification, the only 2 options for values are:

0 for the False condition </br>
1 for the True condition

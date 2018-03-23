What is Logistic Regression?

Logistic Regression although named regression is actually a *classification* technique and not a regression. It is named regression because the technique is quite similar to linear regression

Linear regression is a supervised machine learning technique which works well when the target column we're trying to predict, the dependent variable, is ordered and continuous.If the target column instead contains discrete values, then linear regression isn't a good fit.

Predictive model for these types of problems, which are known as classification problems can be done using logistic regression.In classification, our target column has a finite set of possible values which represent different categories a row can belong to. We use integers to represent the different categories so we can continue to use mathematical functions to describe how the independent variables map to the dependent variable.

**What is Classification?**
Classification is termed when you want the output in buckets. Following are examples of classification problems and logistic regression can be employed for them.


Problem	Sample Features|	Type|	Categories|	Numerical Categories
-----------------------| -----|-----------|---------------------
Should we accept this student based on their graduate school application?	|	Binary |	Don't Accept, Accept|0, 1
What is the most likely blood type of 2 parent's offspring?	|Parent 1's blood type, Parent 2's blood type|	Multi-class	A, B, AB, O	| 1, 2, 3, 4
Spam classifier||Not Spam, Spam| 0,1
Classify Pictures||Not Cat, Cat|0,1
Tumor|Tumor size| Benign, malignant|0,1


Starting with binary classification, the only 2 options for values are:

0 for the False condition </br>
1 for the True condition


![image](https://user-images.githubusercontent.com/12103383/37812308-539aed86-2e85-11e8-8d08-6921913f2af5.png)


## Problem with using regression in classification

### Does not generalise

![image](https://user-images.githubusercontent.com/12103383/37811624-641c7a20-2e81-11e8-9821-290ad92d37cc.png)

In the above example malignant tumors get 1 and non malignant tumors get 0 and we are trying to fit the green line. While making predictions we will say that if the value on the line lies above 0.5 on the y axis (malignant?), then the tumor is malignant, else we will say it’s benign. We are happy with our predictions and we go home.

But wait, the doctor (our customer) comes back to us and shows us the following problem in the model. He ran the model on his dataset and the model got trained a bit different and it’s giving erroneous results. You look at the dataset and the resultant green line and you see this.

![image](https://user-images.githubusercontent.com/12103383/37811674-a963af86-2e81-11e8-8b6b-2b44c19e0f00.png)

This is valid because all tumors that are large are also malignant. Now our model that malignant if y>0.5 does not work.

We cannot change the hypothesis every time a new dataset comes. That would defeat the whole purpose. In technical terms, our model does not generalize. We have to find a better way of defining our model. Fortunately, we have Logistic Regression, which is Regression analysis but with a twist.

### Linear Regression predicts a numerical variable

In linear regression, we used the linear function y = mx + b to represent the relationship between the independent variables and the dependent variable. In logistic regression, we use the logistic function, which is a version of the linear function that is adapted for classification. While a linear regression model outputs a real number as the label, a logistic regression model outputs a probability value.

![image](https://user-images.githubusercontent.com/12103383/37813755-a356b9de-2e8c-11e8-82e6-8b0d47ae2ee4.png)

## How do you constraint hypotheses to output probability?
Linear Regression + Sigmoid/Logistic/Softmax

![image](https://user-images.githubusercontent.com/12103383/37813888-65d5310c-2e8d-11e8-8e66-61870a5c9bfa.png)


z | g(z)
--|-----
15 | 1.00000
14 | 1.00000
13 |1.00000
12 | 0.99999
11 | 0.99998
10 | 0.99995
9 | 0.99988
8 | 0.99966
7 | 0.99909
6 | 0.99753
5 | 0.99331
4 | 0.98201
3 | 0.95257
2 | 0.88080
1 | 0.73106
0 | 0.50000
-1 | 0.26894
-2 | 0.11920
-3 | 0.047426
-4 | 0.017986
-5 | 0.0066929
-6 | 0.0024726
-7 | 9.1105e-04
-8 | 3.3535e-04
-9 | 1.2339e-04
-10 | 4.5398e-05


![image](https://user-images.githubusercontent.com/12103383/37814134-735a889e-2e8e-11e8-8d8f-75c0a3e4dfbb.png)



## More on logistic function

The central premise of Logistic Regression is the assumption that your input space can be separated into two nice ‘regions’, one for each class, by a boundary


 In binary classification, if the probability value is larger than a certain threshold probability, we assign the label for that row to 1 or 0 otherwise. This threshold is called the discrimination threshold and scikit-learn sets it to 0.5 by default when predicting labels. If the predicted probability is greater than 0.5, the label for that observation is 1. If it is instead less than 0.5, the label for that observation is 0.

Let's explore some of the logistic function's properties to better understand why it's useful for classification tasks. Unlike in linear regression, where the output can be any real value, in logistic regression the output has to be a real value between 0 and 1, since the output represents a probability value. Note that the model can't output a negative value or it would violate this criteria.
Here's the mathematical representation of the logistic function:

![image](https://user-images.githubusercontent.com/12103383/37811988-635fb7da-2e83-11e8-82c4-bfab9e338b1e.png)

The logistic function is broken up into 2 key parts:

The exponential transformation, transforming all values to be positive: e^- [ ]
The normalization transformation, transforming all values to range between 0 and 1: t/(t+1)

The exponential transformation and the normalization forces the output values to be squeezed between 0 and 1. If you plot just the exponential part, the output values won't be limited to the range of 0 to 1:

![image](https://user-images.githubusercontent.com/12103383/37812015-90153b60-2e83-11e8-838c-917bc5bb73f1.png)

The normalization part alone unfortunately isn't sufficient since it struggles at constraining negative values:

![image](https://user-images.githubusercontent.com/12103383/37812025-a5f221dc-2e83-11e8-90ee-6ea920f36867.png)

Together, both of these pieces work well to constrain the output to the range of values that probabilities are in.

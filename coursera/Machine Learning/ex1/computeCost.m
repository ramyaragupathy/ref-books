function J = computeCost(X, y, theta)
%COMPUTECOST Compute cost for linear regression
%   J = COMPUTECOST(X, y, theta) computes the cost of using theta as the
%   parameter for linear regression to fit the data points in X and y

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly
J = 0;
hypotheses = X * theta;
% order matters, matrix multiplication is not commutative
squared_errors = (hypotheses - y) .^ 2;
J = sum(squared_errors)/(2*m);
% 1/2 does not affect your prediction
% without 1/2 cost is just double, but the prediction remains the same
end

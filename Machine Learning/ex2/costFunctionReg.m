function [J, grad] = costFunctionReg(theta, X, y, lambda)
%COSTFUNCTIONREG Compute cost and gradient for logistic regression with regularization
%   J = COSTFUNCTIONREG(theta, X, y, lambda) computes the cost of using
%   theta as the parameter for regularized logistic regression and the
%   gradient of the cost w.r.t. to the parameters.

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly
J = 0;
grad = zeros(size(theta));

h = sigmoid(X * theta);
cost = sum(-y .* log(h) - (1 - y) .* log(1 - h));
grad = X' * (h - y);

grad_reg = lambda * theta;
grad_reg(1) = 0;
grad = grad + grad_reg;


J = cost / m + (lambda / (2.0 * m)) * sum(theta(2:size(theta)) .^ 2);
grad = grad / m;
end

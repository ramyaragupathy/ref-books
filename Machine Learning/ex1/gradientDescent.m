function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENTDESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESCENT(X, y, theta, alpha, num_iters) updates theta by
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters

    % ====================== YOUR CODE HERE ======================
    % Instructions: Perform a single gradient step on the parameter vector
    %               theta.
    %
    % Hint: While debugging, it can be useful to print out the values
    %       of the cost function (computeCost) and gradient here.
    %

    hypotheses = X * theta; % X is 97x2, theta is 2x1, h is 97x1(predicted prices)
    errors = hypotheses - y; % y is 97x1 as well. errors has elementwise subtraction and it is a 97-dimensional vector
    delta = X' * errors; % X is 97x2, errors is 97x1, so do a transpose on X
    theta = theta - (alpha / m) * delta;


    % ============================================================

    % Save the cost J in every iteration
    J_history(iter) = computeCost(X, y, theta);

end

end

function [theta, J_history] = gradientDescentMulti(X, y, theta, alpha, num_iters)
%GRADIENTDESCENTMULTI Performs gradient descent to learn theta
%   theta = GRADIENTDESCENTMULTI(x, y, theta, alpha, num_iters) updates theta by
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
    %       of the cost function (computeCostMulti) and gradient here.
    %

    hypotheses = X * theta;
    errors = hypotheses - y;
    % theta_0 = theta(1) - (alpha/m) * sum (errors .* X(:,1));
    % theta_1 = theta(2) - (alpha/m) * sum (errors .* X(:,2));
    % theta = [theta_0; theta_1];
    delta = X' * errors;
    % delta returns a 2-dimensional vector, note sum is not explicitly specified
    % delta's first element holds each error element multiplied by x0=1, so it is just sum of errors
    % delta's second element holds each error element multiplied by the corresposnding feature element
    theta = theta - (alpha/m) * delta;









    % ============================================================

    % Save the cost J in every iteration
    J_history(iter) = computeCostMulti(X, y, theta);

end

end

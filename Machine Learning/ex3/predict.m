function p = predict(Theta1, Theta2, X)
%PREDICT Predict the label of an input given a trained neural network
%   p = PREDICT(Theta1, Theta2, X) outputs the predicted label of X given the
%   trained weights of a neural network (Theta1, Theta2)

% Useful values
m = size(X, 1);
num_labels = size(Theta2, 1);

% You need to return the following variables correctly
p = zeros(size(X, 1), 1);


X = [ones(m, 1) X];

for i=1:m
    a1 = X(i,:)';
    a2 = [1; sigmoid(Theta1 * a1)];
    a3 = sigmoid(Theta2 * a2);
    [m, idx] = max(a3');
    p(i) = idx;
end;

end

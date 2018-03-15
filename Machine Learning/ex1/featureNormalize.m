function [X_norm, mu, sigma] = featureNormalize(X)
%FEATURENORMALIZE Normalizes the features in X
%   FEATURENORMALIZE(X) returns a normalized version of X where
%   the mean value of each feature is 0 and the standard deviation
%   is 1. This is often a good preprocessing step to do when
%   working with learning algorithms.

X_norm = X; %X_norm matrix to hold normalised values
numColumns = size(X, 2); % taking the number of columns from X vector which denotes num of features

mu = mean(X); % returns mean for each column, rowwise is done with mean(X,2)
sigma = std(X); % returns std for each column
for i = 1:numColumns
    X_norm(:,i) = (X(:, i) - mu(i)) / sigma(i);
end;

end

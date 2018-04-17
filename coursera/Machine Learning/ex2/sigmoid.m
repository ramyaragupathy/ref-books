function g = sigmoid(z)
%SIGMOID Compute sigmoid function
%   g = SIGMOID(z) computes the sigmoid of z.

% You need to return the following variables correctly
g = zeros(size(z));



g = 1 ./ ( 1 + exp(-z));
%sigmoid(15) 1.00000
%sigmoid(14) 1.00000
%sigmoid(13) 1.00000
%sigmoid(12) 0.99999
%sigmoid(11) 0.99998
%sigmoid(10) 0.99995
%sigmoid(9) 0.99988
%sigmoid(8) 0.99966
%sigmoid(7) 0.99909
%sigmoid(6) 0.99753
%sigmoid(5) 0.99331
%sigmoid(4) 0.98201
%sigmoid(3) 0.95257
%sigmoid(2) 0.88080
%sigmoid(1) 0.73106
%sigmoid(0) 0.50000
%sigmoid(-1) 0.26894
%sigmoid(-2) 0.11920
%sigmoid(-3) 0.047426
%sigmoid(-4) 0.017986
%sigmoid(-5) 0.0066929
%sigmoid(-6) 0.0024726
%sigmoid(-7) 9.1105e-04
%sigmoid(-8) 3.3535e-04
%sigmoid(-9) 1.2339e-04
%sigmoid(-10) 4.5398e-05

end

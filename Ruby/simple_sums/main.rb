# Simple Sums - Ruby
#
# Write a program that can calculate the sum of the first n elements of the following sequences:
#
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# For example:
#
# s1(4) = 0
# s2(4) = 10
# Use any language of your choice.
#
# Can you guess what the sum would be if n is infinity?

require 'pry'


#every odd number === 1
#every even number === 0

def s1(num)
  if (num % 2 == 0)
    puts 0
  elsif (num % 2 != 0)
    puts 1
  end
end

s1(4)

def s2 (num)
  output = 0;
  (1..num).each do | n |
    output += n
  end
  puts output
end

s2(4)

# The Collatz conjecture
# The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz,
# who first proposed it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture,
# the Kakutani's problem, the Thwaites conjecture, Hasse's problem or the Syracuse problem,
# the sequence of numbers that results is referred to as the hailstone numbers or the wondrous numbers.
#
# The problem is defined as follows:
#
# Take any positive integer n. If n is even, divide it by 2 to get n / 2.
# If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
# Repeat the process indefinitely.
# The conjecture is that no matter what number you start with, you will always eventually reach 1.
#
# Task
# Write a program that given a number, verifies this conjecture for all positive numbers greater than one.
#  Ideally your program will output when it has completed, how many cycles it ran for and all the steps
#  it took to reach the end.
#
# Examples to verify your program can be found on the wikipedia page.
#
#
# Read num input
# if positive?
# even = n / 2
# odd = 3n + 1
# until you reach 1
# print input each iteration, cycles count

require 'pry'

def collatz (num)
  cycle = 0;
  nextNum = 0;

  if ( num > 1 )
    if ( num % 2 == 0)
      nextNum = num / 2
      puts "The number was POSITIVE!"
    else
      nextNum = 3 * num + 1
      puts "The number was NEGATIVE!"
    end
    cycle += 1
    puts nextNum
  end

  if ( nextNum != 1 )
    collatz(nextNum)
  else
    puts "Process complete with #{ cycle } cycles!"
  end
end


collatz(5)
collatz(10)
collatz(14)
collatz(23)

# class Collatz
#
#   def initialize num
#     @collection = [ num ]
#     calculate_collection( num )
#   end
#
#   def calculate_collection num
#     if @collection.last > 1
#       @collection.push( num.even? ? ( num / 2 ) : ( num * 3 + 1 ) )
#       calculate_collection( @collection.last )
#     end
#   end
#
#   def answer
#     puts "The total step were: #{ @collection.join(', ') }"
#     puts "The program ran #{ @collection.length } times."
#   end
# end
#
# Collatz.new(19).answer

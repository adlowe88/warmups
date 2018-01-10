# Normalized Phone Number
# Write a program that cleans up user-entered phone numbers so that they can be sent SMS messages.
#
# The rules are as follows:
#
# If the phone number is less than 10 digits assume that it is bad number
# If the phone number is 10 digits assume that it is good
# If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
# If the phone number is 11 digits and the first number is not 1, then it is a bad number
# If the phone number is more than 11 digits assume that it is a bad number
# We've provided tests, now make them pass.
#
# Hint: Only make one test pass at a time. You can turn off tests by sending the message skip to it:
#
require 'pry'

class Phone
  def initialize num
    @num = num.gsub(/\W/, "")
    get_matches
  end

  def validate
    # @num.start_with("1")
    if (@num.length == 11 && @num[0] == "1")
      @num = @num[1..10]
    elsif (@num.length != 10)
      @num = "0000000000"
    end
    @num
  end

  def get_matches
    @matches = @num.match(/(\d{3})(\d{3})(\d{4})/)
  end

  def to_s
    "(#{ @matches[1]}) #{ @matches[2] }-#{ @matches[3] }"
  end

  def area_code
    @matches[1]
  end

  def number
    validate
    # binding.pry
    # "1234567890"
  end


end

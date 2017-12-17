# Point Mutations
#
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular
# DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell.
# Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute.
# In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor,
# we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
#
# This is called the 'Hamming distance'
#
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# Source
#
# The Calculating Point Mutations problem at Rosalind
require "pry"

str1 = 'GAGCCTACTAACGGGAT'
str2 = 'CATCGTAATGACGGCCT'
#
# def hamming ( str1, str2 )
#
#   str1 = str1.split("")
#   str2 = str2.split("")
#
#   difference = 0
#
#   str1.each_with_index do | c, i |
#     # binding.pry
#     difference += 1 if str1[i] != str2[i]
#   end
#
#   difference
#
# end
#
# puts hamming(str1, str2)

class HamCount

  def initialize ( str1, str2 )
    @str1 = str1.split("")
    @str2 = str2.split("")

  end

  def count
    count = 0

    @str1.each_with_index do | c, i |
      count += 1 if @str1[i] != @str2[i]
    end
    count
  end

end

hamm_class = HamCount.new( str1, str2 )
puts hamm_class.count

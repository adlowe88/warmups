require 'twitter'

namespace :twitter do
  desc "Removes all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  desc "Stats..."
  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populates the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do | t, args |
    # puts "Creating #{ args[:user_count] } users"
    args[:user_count].to_i.times do
      user = User.create :email => Faker::Internet.email
      rand(1..50).times do
        user.tweets.create :content => Faker::Lovecraft.sentence
      end
    end
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populates the Tweet table with real live data from Twitter"
  task :search, [:query, :count] => :environment do | t, args |
    puts "Searching Twitter for #{ args[:count] } tweets mentioning #{ args[:query] }"
    # YOUR CODE (mostly) GOES HERE (do not worry about Users)
    # Search for tweets with 'query'

    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "jOHJyi1MTPaGqWYyi8ILAercK"
      config.consumer_secret     = "NLwFpXrXzhUrfgqOC7kNFoUeAHxOaWG2ZDnLe7SbG0u4U1DvMQ"
      config.access_token        = "919809669782159360-CuiujAwCy4qy9Rix1rCcCs6cfm1lXd8"
      config.access_token_secret = "yhSpEOp6Sg6mEBPGYBsmXNTNXr7at0WYynkl1bX9SPudY"
    end

    # get all the tweet objects from a particular user
    # tweets = client.user_timeline('pepsi', count: 20)
    # for each of the tweets, get the full_text
    # tweets.each { |tweet| puts tweet.full_text }
    client.search(args[:query], result_type: "recent").take(args[:count].to_i).collect do |tweet|
      puts "#{tweet.user.screen_name}: #{tweet.text}"
      Tweet.create :content => "#{tweet.user.screen_name}: #{tweet.text}"
    end

  end

end

# => :environment is to load all of Rails

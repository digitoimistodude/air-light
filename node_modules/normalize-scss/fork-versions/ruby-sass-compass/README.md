# Fork-able normalize-scss<br> for Ruby Sass and Compass 1.0

In addition to copying these files to your Sass project, you'll also need to:

1. Edit your `Gemfile` file to add:

 ```ruby
gem 'support-for', '~> 1.0'
```

2. Edit your project's Compass `config.rb` file to add:

 ```ruby
require 'support-for'
```

3. Update your local Gems with: `bundle install`

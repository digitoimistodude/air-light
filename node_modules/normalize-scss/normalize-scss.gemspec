# -*- encoding: utf-8 -*-

Gem::Specification.new do |spec|
  spec.name        = 'normalize-scss'

  spec.summary     = %q{The Sass version of Normalize.css}
  spec.description = %q{This is the Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles across all browsers. This port aims to use a light dusting of Sass to make Normalize even easier to integrate with your website.}

  spec.homepage    = 'https://github.com/JohnAlbin/normalize-scss'
  spec.rubyforge_project =

  spec.version     = '4.0.3'
  spec.date        = '2015-11-29'
  spec.licenses    = ['GPL-2']

  spec.authors     = ['John Albin Wilkins']
  spec.email       = 'virtually.johnalbin@gmail.com'

  spec.add_runtime_dependency('sass', '~> 3.3')
  spec.add_runtime_dependency('support-for', '~> 1.0')

  spec.files       = `git ls-files`.split($/).select {|f| File.exist?(f) && f =~ %r{^(lib|sass)/} }
  spec.files       += %w(
    bower.json
    CHANGELOG.md
    CONTRIBUTING.md
    LICENSE.md
    normalize-scss.gemspec
    package.json
    README.md
  )
end

class Article < ApplicationRecord
  has_many :searches

  validates :title, presence: true
end

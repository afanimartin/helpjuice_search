require 'rails_helper'

RSpec.describe Search, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:ip_address) }
    it { should validate_presence_of(:query) }
  end

  describe 'associations' do
    it { should belong_to(:article) }
  end
end

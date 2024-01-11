require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:title) }
  end

  describe 'associations' do
    it { should have_many(:searches).dependent(:destroy) }
  end

  describe '#search_count_by_ip' do
    let(:article) { FactoryBot.create(:article) }

    it 'returns 0 when there are no searches with the given IP address' do
      count = article.search_count_by_ip('127.0.0.1')
      expect(count).to eq(0)
    end

    it 'returns the correct count when there are searches with the given IP address' do
      ip_address = '192.168.0.1'
      FactoryBot.create_list(:search, 3, article: article, ip_address: ip_address)

      count = article.search_count_by_ip(ip_address)
      expect(count).to eq(3)
    end
  end
end

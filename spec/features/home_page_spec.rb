require 'rails_helper'

RSpec.describe 'Visiting the home page', js: true do
  it 'reaches the page' do
    visit '/'
    expect(page).to have_content('Perception')
  end

  it 'allows the user to draw on a canvas' do
    visit '/'
    expect(page).to have_css('#drawing-pad')
  end
end

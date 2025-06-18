class WelcomeController < ApplicationController
  def index
    @presentation_elements = presentation_elements
  end

  def about_us
  end

  def leadership
  end

  def security
  end

  def locations
  end

  private

  def presentation_elements
    [
      {
        text: '<span>Empire <label>Discovery</span></label>',
        class: 'highlighted'
      },
      {
        text: 'Forensic Collections <br> & Investigations' ,
      },
      {
        text: 'eDiscovery'
      },
      {
        text: 'Data Hosting'
      },
      {
        text: 'Generative AI'
      },
      {
        text: 'Data Analytics',
      },
      {
        text: 'Paper Discovery <br> & Production',
      }
    ]
  end
end

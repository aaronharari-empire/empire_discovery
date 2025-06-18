Rails.application.routes.draw do
  root 'welcome#index'
  get 'about-us', to: 'welcome#about_us'
  get 'security', to: 'welcome#security'
  get 'locations', to: 'welcome#locations'
  get 'disco', to: 'services#disco'
  get 'cecilia', to: 'services#cecilia'
  get 'rel1', to: 'services#rel1'
  get 'evolution', to: 'services#evolution'
  get 'rel_air', to: 'services#rel_air'
  get 'e-discovery', to: 'services#e_discovery'
  get 'digital-forensics', to: 'services#digital_forensics'
  get 'case-assessment', to: 'services#case_assessment'
  get 'relativity-server', to: 'services#relativity_server'
  get 'artificial-intelligence', to: 'services#artificial_intelligence'
  get 'first-look', to: 'services#first_look'
  get 'fast-track', to: 'services#fast_track'
  get 'consulting', to: 'services#consulting'
  get 'paper-discovery', to: 'services#paper_discovery'
  get 'court-reporting', to: 'services#court_reporting'
  get 'red', to: 'services#red'
  get 'edge', to: 'services#edge'
  get 'processing', to: 'services#processing'
  get 'fusion', to: 'services#fusion'
  get 'deposition-services', to: 'services#deposition_services'

  resources :contact, only: [:new, :create]
  resources :services, only: [:index]
end

class ContactController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    ContactMailer.with(contact_message: params)
      .new_message.deliver_now

    render plain: 'MF000'
  end
end

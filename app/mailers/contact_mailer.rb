class ContactMailer < ApplicationMailer
  default from: 'info@empirediscovery.com'

  def new_message
    @contact_message = params[:contact_message]

    mail(to: ['fcanterino@empirediscovery.com'], subject: 'New contact message')
  end
end

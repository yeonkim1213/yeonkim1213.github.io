import emailjs from '@emailjs/browser';

export const emailConfig = {
  serviceId: 'service_j4gm39j',
  templateId: 'template_ccziu1m',
  publicKey: 'WjclgQu66bqeBEraz'
};

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      formData,
      emailConfig.publicKey
    );
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 
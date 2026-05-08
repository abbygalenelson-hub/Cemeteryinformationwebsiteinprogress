import { useState, FormEvent } from 'react';
import { Button } from '../components/ui/button';

const RECIPIENT = 'abbygalehopenelson@gmail.com';

export function Contact() {
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('email');
  const [contactValue, setContactValue] = useState('');
  const [connection, setConnection] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `HCWMC Database — Question/Comment from ${name || 'Anonymous'}`;
    const body =
      `Preferred name: ${name}\n` +
      `Preferred contact method: ${contactMethod}\n` +
      `${contactMethod === 'email' ? 'Email' : 'Phone number'}: ${contactValue}\n` +
      `Connection to Highland Creek: ${connection}\n\n` +
      `Message:\n${message}\n`;
    const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-2 text-center text-black">Questions & Comments</h1>
        <p className="text-center text-black mb-8">
          Have a question, correction, story, or family connection to share? Fill out the form below and it will be sent to Abbygale Nelson.
        </p>

        {sent && (
          <div className="mb-6 rounded border border-green-700 bg-green-50 p-4 text-black">
            Your email client should have opened with your message ready to send. If it didn't, please email{' '}
            <a className="underline" href={`mailto:${RECIPIENT}`}>{RECIPIENT}</a> directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg bg-white p-6 shadow">
          <div>
            <label className="block mb-1 text-black" htmlFor="name">Preferred name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-black">Preferred contact method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-black">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={contactMethod === 'email'}
                  onChange={() => setContactMethod('email')}
                />
                Email
              </label>
              <label className="flex items-center gap-2 text-black">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={contactMethod === 'phone'}
                  onChange={() => setContactMethod('phone')}
                />
                Phone (text)
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-black" htmlFor="contactValue">
              {contactMethod === 'email' ? 'Your email address' : 'Your phone number'}
            </label>
            <input
              id="contactValue"
              type={contactMethod === 'email' ? 'email' : 'tel'}
              required
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-black" htmlFor="connection">
              Your connection to Highland Creek
            </label>
            <input
              id="connection"
              type="text"
              required
              value={connection}
              onChange={(e) => setConnection(e.target.value)}
              placeholder="e.g. descendant, local resident, researcher"
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-black" htmlFor="message">Question or comment</label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <Button type="submit" className="w-full">Send</Button>
        </form>
      </div>
    </div>
  );
}

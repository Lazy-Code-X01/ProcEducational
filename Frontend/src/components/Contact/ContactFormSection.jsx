'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from '@relume_io/relume-ui';

export const ContactFormSection = (props) => {
  const { tagline, heading, description, button } = {
    ...Contact2Defaults,
    ...props,
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    description: '',
    message: '',
    acceptTerms: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const selectItems = [
    { value: 'Student-Inquiry', label: 'Student Inquiry' },
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'partnership-interest', label: 'Partnership Interest' },
  ];

  const radioItems = [
    { value: 'Student-Inquiry', label: 'First choice' },
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'partnership-interest', label: 'Partnership Interest' },
    { value: 'feedback-request', label: 'Feedback Request' },
    { value: 'other-inquiry', label: 'Other Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl rounded-lg shadow-md p-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 mb-2">{tagline}</p>
          <h2 className="text-3xl font-medium text-gray-800 mb-4">{heading}</h2>
          <p className="text-gray-[#E65F27]">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                Phone number
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]"
              />
            </div>
          </div>

          <div>
            <Label className="block mb-2 text-sm font-medium text-gray-700">Select a topic</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, topic: value })}>
              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg">
                {selectItems.map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item.value}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block mb-3 text-sm font-medium text-gray-700">
              Your Role in Education
            </Label>
            <RadioGroup
              onValueChange={(value) => setFormData({ ...formData, description: value })}
              className="grid grid-cols-2 sm:grid-cols-2 gap-4"
            >
              {radioItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.value}
                    id={item.value}
                    className="h-4 w-4  text-[#E65F27] focus:ring-[#E65F27]"
                  />
                  <Label htmlFor={item.value} className="text-sm md:font-medium text-gray-700 ">
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] focus:ring-2 focus:ring-[#E65F27] focus:border-[#E65F27]"
            />
          </div>

          <div className="flex items-center">
            <Checkbox
              id="terms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked })}
              className="h-4 w-4 text-[#E65F27] focus:ring-[#E65F27]"
            />
            <Label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I accept the{' '}
              <a href="#" className="text-[#E65F27] hover:text-[#E65F27]">
                Terms
              </a>
            </Label>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className=" md:w-auto px-6 py-3 bg-[#E65F27] text-white font-medium rounded-full hover:bg-[#E65F27] focus:outline-none focus:ring-2 focus:ring-[#E65F27] focus:ring-offset-2"
            >
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact2Defaults = {
  tagline: 'Connect',
  heading: 'Get in Touch',
  description: "We'd love to hear from you!",
  button: { title: 'Submit' },
};

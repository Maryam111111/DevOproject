# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire Django project into the container
COPY . .

# Set environment variables for Django settings
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE=JWL.settings

# Expose the port your app will run on (default Django port)
EXPOSE 8000

# Run the Django application using Gunicorn (or any other WSGI server)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "JWL.wsgi:application"]

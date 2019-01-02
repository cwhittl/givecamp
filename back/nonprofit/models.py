from functools import reduce

from django.db import models
from phone_field import PhoneField

from versions.models import Versionable
from versions.fields import VersionedForeignKey

SHIRT_CHOICES = (
    ('s', 'Small'),
    ('m', 'Medium'),
    ('l', 'Large'),
    ('xl', 'XL'),
    ('2xl', '2XL'),
    ('3xl', '3XL'),
    ('4xl', '4XL'),
)

class Application(Versionable):

    date = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=255)
    mission = models.CharField(max_length=1000)
    products_and_services = models.CharField(max_length=1000)
    ask = models.CharField(max_length=1000)
    needs_hosting = models.BooleanField(default=False)
    needs_new_domain = models.BooleanField(default=False)
    applicant = VersionedForeignKey(
        'Representative', null=True, related_name='+', on_delete=models.CASCADE)
    url = models.URLField(max_length=255)

    def __str__(self):
        return 'NPO Application #{} - {}'.format(self.id, self.name)

class Representative(Versionable):

    date = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = PhoneField(blank=False)
    other_phone_number = PhoneField(blank=False)
    role = models.CharField(max_length=255)
    attending_event = models.BooleanField(default=False)
    shirt_size = models.CharField(max_length=6, choices=SHIRT_CHOICES)

    application = VersionedForeignKey(
        Application, related_name='representatives', on_delete=models.CASCADE)

    def __str__(self):
        return 'Representative #{} - {} {}'.format(self.id, self.name, self.application)

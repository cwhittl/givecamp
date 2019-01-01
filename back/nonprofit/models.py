from functools import reduce

from django.db import models
from phone_field import PhoneField

from versions.models import Versionable
from versions.fields import VersionedForeignKey

class Organization(Versionable):

    date = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)
    url = models.URLField(max_length=255)

    def __str__(self):
        return 'Organization #{} - {}'.format(self.id, self.name)

class Representative(Versionable):

    date = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = PhoneField(blank=False)
    other_phone_number = PhoneField(blank=False)

    organization = VersionedForeignKey(
        Organization, related_name='organizations', on_delete=models.CASCADE)

    def __str__(self):
        return 'Representative #{} - {} {}'.format(self.id, self.name, self.organization)

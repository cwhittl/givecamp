from functools import reduce

from django.db import models

from crm.models import Company
from products.models import Product


INVOICE_TYPES = (
    ('ci', 'Client'),
    ('si', 'Supplier'),
)

INVOICE_STATES = (
    ('draft', 'Draft'),
    ('open', 'Open'),
    ('paid', 'Paid'),
)


class Organization(models.Model):

    date = models.DateField(auto_now_add=True)
    invoice_type = models.CharField(max_length=2, choices=INVOICE_TYPES)
    related_party = models.ForeignKey(Company, related_name='organizations', on_delete=models.CASCADE)
    state = models.CharField(max_length=5, choices=INVOICE_STATES)

    @property
    def sign(self):
        if self.invoice_type == 'si':
            return '-'
        return ''

    def __str__(self):
        return 'Organization #{} - {} ({}{})'.format(self.id, self.related_party, self.sign, self.total)

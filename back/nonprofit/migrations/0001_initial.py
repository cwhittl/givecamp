# Generated by Django 2.0.5 on 2018-12-30 21:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('crm', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('invoice_type', models.CharField(choices=[('ci', 'Client'), ('si', 'Supplier')], max_length=2)),
                ('state', models.CharField(choices=[('draft', 'Draft'), ('open', 'Open'), ('paid', 'Paid')], max_length=5)),
                ('related_party', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='organizations', to='crm.Company')),
            ],
        ),
    ]

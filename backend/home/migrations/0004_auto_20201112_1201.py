# Generated by Django 2.2.17 on 2020-11-12 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_auto_20201112_1200"),
    ]

    operations = [
        migrations.RenameField(
            model_name="customtext",
            old_name="jjghjg",
            new_name="jjghjghgfhfhgf",
        ),
        migrations.AlterField(
            model_name="customtext",
            name="title",
            field=models.CharField(blank=True, max_length=150),
        ),
    ]

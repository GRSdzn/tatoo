# Generated by Django 4.2 on 2023-06-05 23:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Styles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='artists.artist')),
            ],
        ),
        migrations.AddField(
            model_name='artist',
            name='styles',
            field=models.ManyToManyField(to='artists.styles'),
        ),
    ]
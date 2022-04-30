from django.db import models

# Create your models here.

class Data(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    rent = models.IntegerField()
    emi = models.IntegerField()
    tax = models.IntegerField()
    exp = models.IntegerField()
    expenses_monthly = models.IntegerField(default=0)
    monthly_income=models.IntegerField(default=0)


    def __repr__(self) -> str:
        return self.name



# UnitTestApp

The pupose of this small 'App' is to investigate how to interact with **Observables** exported by services.

Such **Observables** are used directly in components during the declaration of the components properties.

**observer.service** provides an observable myObs$:

```
  private mySubject = new BehaviorSubject<number>(1);

  get myObs$() {
    return this.mySubject.asObservable();
  }
```

Which is utilized in **observable-test/observable-test.component.ts**



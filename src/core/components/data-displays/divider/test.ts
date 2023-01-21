import { Observable } from "@/core/entities/observable";
import { ObserverFactory } from '@/core/factories/observer-factory';

type EObserverMap = {
  "on-size": (value: number) => void;
  "on-orientation": (value: 'horizontal' | 'vertical') => void;
}

const { createObserver } = ObserverFactory<EObserverMap>();

const observables = new Observable<EObserverMap>();

observables.Subscribe(createObserver("on-size", (data) => {}));
observables.Subscribe(createObserver("on-orientation", (data) => {}));

